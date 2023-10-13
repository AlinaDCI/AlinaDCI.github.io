const header = document.querySelector(".header");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the header
    header.style.transform = "translateY(0)";
  } else {
    // Scrolling down, hide the header
    header.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
});
