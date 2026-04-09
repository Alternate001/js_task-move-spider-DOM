'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

wall.addEventListener('click', (e) => {
  const wallBond = wall.getBoundingClientRect();

  const leftBox = e.clientX - wallBond.left - spider.offsetWidth / 2;
  const maxLeft = wallBond.width - spider.offsetWidth;
  const allowedLeft = clamp(leftBox, 0, maxLeft);

  const topBox = e.clientY - wallBond.top - spider.offsetHeight / 2;
  const maxTop = wallBond.height - spider.offsetHeight;
  const allowedTop = clamp(topBox, 0, maxTop);

  spider.style.top = allowedTop + 'px';
  spider.style.left = allowedLeft + 'px';
});
