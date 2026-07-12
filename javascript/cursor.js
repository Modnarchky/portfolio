const cursor = document.getElementById("cursor");
const iframe = document.querySelector("iframe");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mouseover", (e) => {

    if (
        e.target.closest(
            "a, button, .project-card-column, .primary-btn, .icon, .img-wrapper, .open-lightbox-zoom, .lightbox-zoom-close, .video-iframe, .open-lightbox-compare, .prototype, .prototype-iframe, .prototype-iframe-container"
        )
    ) {
        cursor.textContent = "🤩";
    } else {
        cursor.textContent = "😐";
    }

});

// Hide cursor over iframe
iframe.addEventListener("mouseenter", () => {
    cursor.style.display = "none";
});

iframe.addEventListener("mouseleave", () => {
    cursor.style.display = "flex";
});
const particles = ["•", "•", "✦", "✧", "✩", "✫"];

let lastParticle = 0;

document.addEventListener("mousemove", (e) => {

    const now = Date.now();

    // Only create one particle every 30ms
    if (now - lastParticle < 200) return;

    lastParticle = now;

    const particle = document.createElement("div");
    particle.className = "particle";

    particle.textContent =
        particles[Math.floor(Math.random() * particles.length)];

    // Random position around cursor
    particle.style.left =
        `${e.clientX + (Math.random() - 0.5) * 16}px`;

    particle.style.top =
        `${e.clientY + (Math.random() - 0.5) * 16}px`;

    // Random size
    particle.style.fontSize =
        `${8 + Math.random() * 10}px`;


    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);

});