document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("projectsGrid");
  if (!container) return;

  let allProjects = [];

  function slugify(tag) {
    return tag
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");
  }

  // ---------- RENDER ----------
  function renderProjects(projects) {

    container.innerHTML = "";

    const fragment = document.createDocumentFragment();

    projects.forEach((project, index) => {

      const tags = project.tags || [];
      const tagSlugs = tags.map(slugify).join(",");

      const card = document.createElement("a");
      card.className = "project-link is-ready";
      card.href = project.url;
      card.dataset.tags = tagSlugs;

      card.innerHTML = `
        <div class="project-card-column">
          <div class="project-thumbnails">
            <img src="${project.thumbnail}" alt="${project.title}">
          </div>

          <div class="project-info">
            <h4>${project.title}</h4>

            <div class="tag-spacer">
              ${tags.map(tag => `
                <span class="tag-pill">${tag}</span>
              `).join("")}
            </div>
          </div>
        </div>
      `;

      fragment.appendChild(card);

      // stagger animation reset
      setTimeout(() => {
        card.classList.remove("is-ready");
      }, index * 60);

    });

    container.appendChild(fragment);
  }

  // ---------- FILTER ----------
  function setupFiltering() {

    const buttons = document.querySelectorAll(".filter-btn");

    // skip filtering setup if no buttons exist
    if (!buttons.length) return;

    function filterProjects(filter) {

      const normalized = slugify(filter);

      const filtered = allProjects.filter(project => {

        const tags = (project.tags || []).map(tag => slugify(tag));

return normalized === "all" || tags.includes(normalized);

      });

      renderProjects(filtered);
    }

    buttons.forEach(btn => {

      btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // force re-render animation
        container.innerHTML = "";

        requestAnimationFrame(() => {
          filterProjects(btn.dataset.filter);
        });

      });

    });

  }

  // ---------- LOAD DATA ----------
  fetch("/json/projects.json")
    .then(res => res.json())
    .then(projects => {

      allProjects = projects.filter(project => project.shown);

      // Jekyll homepage = "/"
      const isHomepage =
        window.location.pathname === "/";

      if (isHomepage) {

        // Homepage → featured only
        renderProjects(
          projects.filter(project => project.featured)
        );

      } else {

        // Other pages → all projects
        renderProjects(allProjects);

      }

      setupFiltering();

    })
    .catch(err => console.error("Failed to load projects:", err));

});