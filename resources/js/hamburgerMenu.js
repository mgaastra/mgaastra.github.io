const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");

function hamburgerNav() {
  switch (window.getComputedStyle(navigation).display) {
    case "flex":
      navigation.style.display = "none";
      break;
    case "none":
      navigation.style.display = "flex";
      break;
  }
}

function windowNav() {
  if (window.innerWidth > 1045) {
    navigation.style.display = "flex";
  }

  if (window.innerWidth < 1045) {
    navigation.style.display = "none";
  }
}

hamburger.addEventListener("click", hamburgerNav);
hamburger.addEventListener("touch", hamburgerNav);

window.addEventListener("resize", windowNav);

//close menu on clicking menu item in mobile view
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (window.innerWidth < 1045) {
      navigation.style.display = "none";
    }
  });
});
