// Top nav
function TogglePageNavs() {
  const topNavId = "top-nav";
  const hideNavClassName = "hidden";
  const showNavIconName = "fa-bars";
  const hideNavIconName = "fa-times";

  var icon = this.querySelector("i");
  var topNav = document.getElementById(topNavId);

  if (topNav.classList.contains(hideNavClassName)) {
    // Show nav
    topNav.classList.remove(hideNavClassName);
    icon.classList.remove(showNavIconName);
    icon.classList.add(hideNavIconName);
  }
  else {
    // Hide nav
    topNav.classList.add(hideNavClassName);
    icon.classList.remove(hideNavIconName);
    icon.classList.add(showNavIconName);
  }
}
document.getElementById("top-nav-toggle-btn").onclick = TogglePageNavs;

// Carousel
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// Footer
function SetFooterYear() {
  var footerYear = document.getElementById("footer-year");
  var year = new Date().getFullYear();
  footerYear.innerHTML = year;
}
SetFooterYear();
