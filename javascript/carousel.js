const carousel = document.querySelector(".carousel");

let speed = 1;
let offset = 0;
let halfWidth = 0;

// duplicate items immediately
const items = Array.from(carousel.children);
items.forEach(el => carousel.appendChild(el.cloneNode(true)));

// measure after first paint
function init() {
  halfWidth = carousel.scrollWidth / 2;
  requestAnimationFrame(animate);
}

function animate() {
  offset += speed;

  // seamless loop (no snap)
  if (offset >= halfWidth) {
    offset -= halfWidth;
  }

  carousel.style.transform = `translate3d(${-offset}px, 0, 0)`;

  requestAnimationFrame(animate);
}

// run immediately after layout settles
window.addEventListener("load", init);