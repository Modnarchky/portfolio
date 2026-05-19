
// -----------------------------
// PAGE FADE-IN ON LOAD
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("fade-out");
});


// -----------------------------
// SMOOTH LINK TRANSITIONS
// -----------------------------
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");

  if (!link) return;

  // ignore external links, anchors, new tabs
  const href = link.getAttribute("href");
  if (
    !href ||
    href.startsWith("http") ||
    href.startsWith("#") ||
    link.target === "_blank"
  ) {
    return;
  }

  e.preventDefault();

  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = href;
  }, 200);
});


// -----------------------------
// BACK/FORWARD BUTTON SUPPORT
// -----------------------------
window.addEventListener("pageshow", (event) => {
  // handles browser back cache (bfcache)
  document.body.classList.remove("fade-out");
});