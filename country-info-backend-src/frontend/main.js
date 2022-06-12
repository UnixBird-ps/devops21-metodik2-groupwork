// if there is a th scroll it into view
let th = document.querySelector("th");
th && th.scrollIntoView();

document.body.addEventListener('click', e => {
  let aTag = e.target.closest('a');
  if (aTag) {
    let href = aTag.getAttribute('href') + '';
    if (!href || href[0] === '#') {
      return;
    }
    if (href[0] === '/') {
      aTag.setAttribute('href', 'https://en.wikipedia.org' + href);
    }
    aTag.setAttribute('target', '_blank');
  }
});