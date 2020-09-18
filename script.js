const humberger = document.querySelector(".humberger");
const navigationTab = document.querySelector(".navigation-mobile");
humberger.addEventListener("click", openAndCloseNavigationTab);
function openAndCloseNavigationTab() {
  if (humberger.classList.length === 1) {
    humberger.classList.add("x");
    navigationTab.style.display = "block";
    navigationTab.style.transform = "translateX(0)";
  } else {
    humberger.classList.remove("x");
    navigationTab.style.transform = "translateX(-100%)";
    navigationTab.style.display = "none";
  }
}
