const fs = require('fs');
const chokidar = require('chokidar');

// Use chokidar to keep checked out repo in sync on volume
//
// This is in a way a hack for bind-mounting from docker in docker
// not working in Windows...
// 
// but works very nicely to keep the checked out repo in sync
// with the file system on the host :)
//
// For all of you bash kids: this is basically rsync deluxe :)
//
// NOTE: usePolling is highly inefficient but needed on Windows hosts
//
chokidar.watch('/repo-bind-mount', { usePolling: true }).on('all', (event, path) => {
  // get the current branch
  let branch = fs.readFileSync('/repo-bind-mount/.git/HEAD', 'utf-8').split('/').pop().trim();
  // the current branch is bind mounted here
  let copyFrom = '/repo-bind-mount';
  // this is where to copy files
  let copyTo = '/storage/branches/' + branch;
  // check if we are NOT "pseudo-bind-mounted"
  // (syncing to the current branch folder)
  // if NOT make it happen
  if (!fs.existsSync(copyTo + '/__pseudo-bind-mounted__')) {
    fs.rmSync(copyTo, { recursive: true, force: true });
    fs.mkdirSync(copyTo);
    fs.writeFileSync(copyTo + '/__pseudo-bind-mounted__', 'yes', 'utf-8');
  }
  let to = path.replace(copyFrom, copyTo);
  // ignore git
  if (path.includes('/.git/')) { return; }
  // sync files using addDir, add, change, unlinkDir and unlink
  try {
    if (event === 'addDir') {
      fs.existsSync(to) && fs.rmSync(to, { recursive: true, force: true });
      fs.mkdirSync(to);
    }
    if (event === 'add' || event === 'change') {
      fs.copyFileSync(path, to);
    }
    if (event === 'unlinkDir') {
      fs.existsSync(to) && fs.rmSync(to, { recursive: true, force: true });
    }
    if (event === 'unlink') {
      fs.existsSync(to) && fs.rmSync(to, { force: true });
    }
  }
  catch (e) { console.log('Error', e) }
  console.log('branch', branch);
  console.log('event', event);
  console.log('from', path);
  console.log('to', to);
  console.log('');
});