// Dark-Light Mode
function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
}
function lightMode() {
  var element = document.body;
  element.className = "";
}

// DOM Event
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

btn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Pull-Tab
var shortcusElement = document.querySelector(".shortcuts");
var tabElement = document.querySelector(".pull-tab");
var iconTab = tabElement.querySelector(".icon-tab");
tabElement.onclick = function (e) {
  if (e.target == tabElement || e.target == iconTab) {
    shortcusElement.style.transform = "translateX(-81px)";
    shortcusElement.style.transition = "transform 0.15s ease-in-out";
    iconTab.style.transform = "scaleX(-1)";
  }
};
