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

// Footer
function SetFooterYear() {
  var footerYear = document.getElementById("footer-year");
  var year = new Date().getFullYear();
  footerYear.innerHTML = year;
}
SetFooterYear();
