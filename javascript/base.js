// =========================
// PAGE TITLE
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const title = document.body.dataset.title;
  document.title = title || "Portfolio";
});


// =========================
// PAGE FADE-IN
// =========================
window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
});


// =========================
// PAGE TRANSITIONS
// =========================
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");

  if (
    !href ||
    href.startsWith("http") ||
    href.startsWith("#") ||
    link.target === "_blank"
  ) return;

  e.preventDefault();

  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = href;
  }, 150);
});