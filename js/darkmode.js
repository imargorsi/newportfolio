const darkmode = () => {
  const themeToggle = document.querySelectorAll("#checkbox");
  const body = document.querySelector("body");

  themeToggle.forEach((btn) => {
    btn.addEventListener("click", () => {
      body.classList.toggle("light-mode");
    });
  });
};

export default darkmode;
