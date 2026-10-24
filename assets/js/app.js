(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const transition = document.querySelector(".page-transition");

  const buildPixelGrid = (container, columns = 10, rows = 7) => {
    if (!container || container.querySelector(".pixel")) return;
    const marker = container.querySelector(".transition-mark");
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < columns * rows; index += 1) {
      const pixel = document.createElement("i");
      const row = Math.floor(index / columns);
      const column = index % columns;
      pixel.className = "pixel";
      pixel.setAttribute("aria-hidden", "true");
      pixel.style.setProperty("--pixel-delay", `${(row + column) * 16}ms`);
      fragment.appendChild(pixel);
    }
    container.insertBefore(fragment, marker || null);
  };

  buildPixelGrid(transition);

  const revealNewPage = () => {
    if (!transition) return;
    transition.classList.remove("active");
    if (!transition.classList.contains("entering")) transition.classList.add("entering");
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => transition.classList.remove("entering"));
    });
  };

  revealNewPage();

  const setHeader = () => header?.classList.toggle("scrolled", window.scrollY > 12);
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });

  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (!nav?.contains(event.target) && !menuButton?.contains(event.target)) {
      nav?.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
    }
  });

  // Reveal content only when it approaches the viewport.
  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("revealed"));
  }

  // Add a smooth cover before navigating between local pages.
  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || link.target === "_blank" || link.hasAttribute("download")) return;
      const targetUrl = new URL(link.href, window.location.href);
      if (targetUrl.origin !== window.location.origin) return;
      event.preventDefault();
      nav?.classList.remove("open");
      transition?.classList.remove("entering");
      transition?.classList.add("active");
      window.setTimeout(() => { window.location.href = targetUrl.href; }, 620);
    });
  });

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) revealNewPage();
  });

  // Artifact filters.
  const filterButtons = document.querySelectorAll("[data-filter]");
  const artifactCards = document.querySelectorAll("[data-category]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      artifactCards.forEach((card) => {
        const matches = filter === "semua" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !matches);
        if (matches) requestAnimationFrame(() => card.classList.add("revealed"));
      });
    });
  });

  // Gallery lightbox.
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = lightbox?.querySelector("img");
  document.querySelectorAll(".gallery-item img").forEach((image) => {
    image.addEventListener("click", () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });
  const closeLightbox = () => {
    lightbox?.classList.remove("open");
    document.body.style.overflow = "";
  };
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.closest(".lightbox-close")) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });

  // Front-end demonstration form; replace with Formspree or another endpoint when ready.
  const contactForm = document.querySelector("#contact-form");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const toast = document.querySelector(".toast");
    toast?.classList.add("show");
    contactForm.reset();
    window.setTimeout(() => toast?.classList.remove("show"), 3200);
  });

  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
