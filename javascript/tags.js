document.addEventListener("DOMContentLoaded", () => {

  function slugify(tag) {
    return tag
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");
  }

  /* =========================================================
     PROJECT CARDS
  ========================================================= */

  const projectCards = document.querySelectorAll(".project-link");

  if (!projectCards.length) return;


  /* =========================================================
     FILTER BUTTONS
  ========================================================= */

  const buttons = document.querySelectorAll(".filter-btn");


  function setActiveButton(filter) {

    buttons.forEach(btn => {
      btn.classList.toggle(
        "active",
        btn.dataset.filter === filter
      );
    });

  }


  /* =========================================================
     FILTER PROJECTS
  ========================================================= */

  function filterProjects(filter) {

    projectCards.forEach(card => {

      const tags = (card.dataset.tags || "")
        .split(",")
        .map(tag => slugify(tag));

      const match =
        filter === "all" ||
        tags.includes(slugify(filter));

      if (match) {
        card.classList.remove("is-hidden");
        card.classList.add("is-visible");
      } else {
        card.classList.remove("is-visible");
        card.classList.add("is-hidden");
      }

    });

  }


  /* =========================================================
     URL FILTER
  ========================================================= */

  const urlParams = new URLSearchParams(
    window.location.search
  );

  const activeTag = urlParams.get("tag");

  if (activeTag) {

    filterProjects(activeTag);
    setActiveButton(activeTag);

  } else {

    filterProjects("all");
    setActiveButton("all");

  }


  /* =========================================================
     BUTTON EVENTS
  ========================================================= */

  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      const filter = btn.dataset.filter;

      filterProjects(filter);
      setActiveButton(filter);

      const newUrl =
        filter === "all"
          ? "/projects/"
          : `/projects/?tag=${slugify(filter)}`;

      window.history.replaceState(
        {},
        "",
        newUrl
      );

    });

  });


  /* =========================================================
     MOBILE FILTER
  ========================================================= */

  const filterToggle =
    document.getElementById("filter-toggle");

  const mobileMenu =
    document.querySelector(".mobile-filter-menu");

  if (filterToggle && mobileMenu) {

    filterToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });

    document.addEventListener("click", e => {

      const insideMenu =
        mobileMenu.contains(e.target) ||
        filterToggle.contains(e.target);

      if (!insideMenu) {
        mobileMenu.classList.remove("show");
      }

    });

  }

});