fetch('./json/projects.json')
  .then(res => res.json())
  .then(projects => {

    const projectId = document.body.dataset.projectId;

    const project = projects.find(p => p.id === projectId);

    if (!project) {
      console.error("Project not found:", projectId);
      return;
    }

    document.title = project.title;

    const breadcrumbEl = document.getElementById("breadcrumbTitle");
    if (breadcrumbEl) breadcrumbEl.textContent = project.title;

    const titleEl = document.getElementById("projectTitle");
    if (titleEl) titleEl.textContent = project.title;

    const overviewEl = document.getElementById("projectOverview");
    if (overviewEl) overviewEl.textContent = project.overview;

    const toolsEl = document.getElementById("projectTools");
    if (toolsEl) toolsEl.textContent = project.tools.join(", ");

    const roleEl = document.getElementById("projectRole");
    if (roleEl) roleEl.textContent = project.role.join(", ");

    const deliverablesEl = document.getElementById("projectDeliverables");
    if (deliverablesEl) deliverablesEl.textContent = project.deliverables.join(", ");

    const targetAudienceEl = document.getElementById("projectTargetAudience");
    if (targetAudienceEl) targetAudienceEl.textContent = project.targetAudience;

    const challengeEl = document.getElementById("projectChallenge");
    if (challengeEl) challengeEl.textContent = project.challenge;

    const impactEl = document.getElementById("projectImpact");
    if (impactEl) impactEl.textContent = project.impact;

    const takeawayEl = document.getElementById("projectTakeaways");
    if (takeawayEl) takeawayEl.textContent = project.takeaways;

    // tags
    const tagContainer = document.querySelector("#project-header .tag-spacer");

    if (tagContainer && project.tags) {
      const tags = project.tags.map(t => t.trim());

      tagContainer.innerHTML = tags
        .map(tag => `<span class="tag-pill">${tag}</span>`)
        .join("");
    }
  })
  .catch(err => console.error("Project load error:", err));