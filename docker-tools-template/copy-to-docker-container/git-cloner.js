const fs = require('fs');
const { execSync } = require('child_process');

const {
  GIT_REPO_NAME: gitRepoName,
  GIT_BRANCH_NAME: gitBranchName,
  GIT_REPO_URL: gitRepoUrl,
  GIT_USERNAME: gitUsername,
  GIT_EMAIL: gitEmail
} = process.env;

const gitRepoSsh = 'git@github.com:'
  + gitRepoUrl.split(':').join('/').split('github.com/')[1];

const dockerSettings = readAndParseDockerSettings();

function exec(...args) {
  // Silent execution
  execSync(...args, { stdio: 'pipe' });
}

function log(...args) {
  // Log things to the terminal/console
  args[0] = args[0] === '-' ? '_'.repeat(70) + '\n' : args[0];
  console.log(...args);
}

// Translate docker settings to a more machine readable format
function readAndParseDockerSettings() {
  let ds;
  try {
    ds = require('./dockerSettings.json');
  }
  catch {
    log('Syntax error in dockerSettings.json\n');
  }
  ds = ds
    .filter(x => typeof x === 'string' || x instanceof Array)
    .filter(x => x !== '' && x.slice(0, 2) !== '//')
    .map(x => typeof x === 'string' ? { branch: x, routes: [] } : x)
    .filter((x, i, a) => x instanceof Array ?
      (a[i - 1].routes = x) && false : true);
  let port = 3000;
  for (let x of ds) {
    let hostPort = x.routes.find(x => typeof x === 'number');
    x.routes = x.routes
      .filter(x => typeof x === 'string')
      .map(x => x.slice(-1) !== '/' ? x + '/' : x)
    hostPort && (x.hostPort = hostPort);
    x.port = port++;
  }
  log('-');
  log('PARSED dockerSettings.json AS:');
  log(JSON.stringify(ds, null, '  '));
  return ds;
}

// Clone the repo
function clone() {
  log('\nUsing Git credentials from host:');
  log('-');
  log('username:', gitUsername);
  log('email:', gitEmail);
  log('repository:', gitRepoSsh);
  log('-');

  try {

    // if the ssh key does not exists then create it
    if (!fs.existsSync('./ssh-key/id_ed25519.pub')) {
      exec([
        'cd ssh-key',
        `ssh-keygen -t ed25519 -N "" -C "${gitEmail}" -f id_ed25519`,
        `chmod 777 *`
      ].join(' && '));
    }

    exec([
      // copy ssh-key to .ssh folder
      'cp -r ssh-key /root/.ssh',
      // set correct chmod for ssh-key files
      'chmod -R 400 /root/.ssh',
      // start ssh agent
      'eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519',
      // set git username and email
      `git config --global user.name "${gitUsername}"`,
      `git config --global user.email "${gitEmail}"`,
      // add github.com to known host (this avoids question before clone)
      'ssh-keyscan github.com >> /root/.ssh/known_hosts',
      // clone
      `cd /storage`,
      `git clone ${gitRepoSsh} cloned-repo`
    ].join(' && '));
  }
  catch (error) { verboseCloneError(error); }

  // Cloned successfully
  checkoutAllBranches();
}

// Verbose error message on clone error with info about ssh key
function verboseCloneError(error) {

  log('\nFAILED TO CLONE:\n');
  log(error + '');
  log('-');
  log('NOTE:');
  log('I am a Docker container and I have copied your global');
  log('git username and email from the host - your machine.')
  log('So if you have set those ok the one thing missing is a')
  log('SSH key...')
  log('');
  log('You need to add this SSH-key to your GitHub account:');
  log('\n' + fs.readFileSync('./ssh-key/id_ed25519.pub', 'utf-8'));
  log('1. Goto Github -> Settings for your account.');
  log('2. Choose SSH and GPG keys -> New SSH Key.');
  log('3. Paste the SSH key, give it a title and save it.');
  log('4. Run ./start again! :)')
  log('');
  process.exit(1);
}

// Checkout all branches in separate folders on the named volume
function checkoutAllBranches() {

  // Get all branch names
  let branches = dockerSettings.map(x => x.branch);
  log('Checking out the branches you requested in dockerSettings.json:');
  log(branches.join('\n'));
  log('-');
  log('Each of them to a separate folder on the Docker volume:\n');
  log(`${gitRepoName}-storage`);

  // Copy the cloned repo folder once for each branch
  try {
    exec([
      'mkdir /storage/branches',
      ...branches
        .map(branch => `cp -r /storage/cloned-repo /storage/branches/${branch}`)
    ].join(' && '));
  } catch (e) {
    log('\nError during copying of cloned repo');
    log(e + '');
  }
  // Remove original clone
  exec('rm -f -r /storage/cloned-repo');

  // Checkout every branch (in its corresponding folder)
  try {
    branches.forEach(branch => {
      exec([
        `cd /storage/branches/${branch}`,
        `git checkout ${branch}`
      ].join(' && '))
    });
  }
  catch (e) {
    log('\nError during checkout of branches');
    log(e + '');
  }

  buildComposeFile(branches);

  log('-');
  log('All done from git-cloner...\n');
}

// Build the docker-compose.yml file
function buildComposeFile() {

  let yml = ['version: "3.8"', '', 'services:'];
  for (let { branch, hostPort, port } of dockerSettings) {

    // for now use the hostPort (if it exists) as internal port
    // the vite developer server gets confused otherwise...
    port = hostPort || port;

    if (fs.existsSync(`/storage/branches/${branch}/Dockerfile`)) {
      let name = gitRepoName + '-' + branch;
      let workingDir = `/storage/branches/${branch}`;
      yml = [
        ...yml,
        `  ${branch}:`,
        `    container_name: ${name}`,
        `    build: /storage/branches/${branch}`,
        `    working_dir: ${workingDir}`,
        `    ports:`,
        `      - "${hostPort}:${port}"`,
        `    volumes:`,
        `      - ${gitRepoName}-storage:/storage`,
        `    environment:`,
        `       PORT: ${port}`
      ];
    }
  }
  yml = [
    ...yml,
    '',
    'volumes:',
    `  ${gitRepoName}-storage:`,
    `    external: true`
  ];
  yml = yml.join('\n');
  log('-');
  log('BUILDING docker-compose.yml:\n');
  log(yml);
  fs.writeFileSync('/storage/branches/docker-compose.yml', yml, 'utf-8');
  fs.writeFileSync('/storage/branches/dockerSettings.json',
    JSON.stringify(dockerSettings, null, '  '), 'utf-8');

}

// Startup everything
clone();
