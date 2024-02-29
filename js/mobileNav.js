const mobileNav = () => {
  const burger = document.getElementById("nav");

  const mobileNav = document.querySelector(".mobilenav");

  burger.addEventListener("click", () => {
    if (mobileNav.style.display == "none") {
      mobileNav.style.display = "block";
    } else {
      mobileNav.style.display = "none";
    }
  });
};

export default mobileNav;
