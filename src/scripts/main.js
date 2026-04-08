'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

wall.addEventListener('click', (e) => {
  const wallBond = wall.getBoundingClientRect();
  let topBox = e.clientY - wallBond.top - spider.offsetHeight / 2;
  let leftBox = e.clientX - wallBond.left - spider.offsetWidth / 2;

  if (topBox > wallBond.height - spider.offsetHeight) {
    topBox = wallBond.height - spider.offsetHeight;
  } else if (topBox < 0) {
    topBox = 0;
  }

  if (leftBox > wallBond.width - spider.offsetWidth) {
    leftBox = wallBond.width - spider.offsetWidth;
  } else if (leftBox < 0) {
    leftBox = 0;
  }

  spider.style.top = topBox + 'px';
  spider.style.left = leftBox + 'px';
});
