fetch('/partials/header')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    const toggle = document.getElementById('toggle');
    const nav = document.getElementById('mainNav');

    if (toggle && nav) {
      toggle.addEventListener('change', function () {
        nav.classList.toggle('active', this.checked);
      });
    }

    // Highlight current page
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

    document.querySelectorAll('#mainNav a').forEach(link => {
      const linkPath = new URL(link.href).pathname.replace(/\/$/, '') || '/';

      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    });
  })
  .catch(error => console.error('Error loading header:', error));