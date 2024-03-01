const revealSection = () => {
  const allSections = document.querySelectorAll(".section");

  const reveal = function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section__hidden");
      entry.target.classList.add("section__animated");

      if (entry.target.classList.contains("projects")) {
        const projectsAll = entry.target.querySelector(".projects__container");

        projectsAll.classList.add("animation_top");
      }

      observer.unobserve(entry.target);
    });
  };

  const sectionObserver = new IntersectionObserver(reveal, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section__hidden");
  });
};

export default revealSection;
