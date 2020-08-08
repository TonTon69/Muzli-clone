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

var submitBtn = document.getElementById("submitBtn");
var submitModal = document.getElementById("overlaySubmit");

var bell = document.querySelector(".header__notification");
var bellElement = document.getElementById("bellModal");
var bellNoti = document.querySelector(".header__notification-noti");

btn.onclick = function () {
  modal.style.display = "block";
};
submitBtn.onclick = function () {
  submitModal.style.display = "flex";
};

bell.onclick = function () {
  bellElement.style.display = "block";
  bellNoti.style.display = "none";
};
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
  if (e.target == submitModal) {
    submitModal.style.display = "none";
  }
  if (e.target == bellElement) {
    bellElement.style.display = "none";
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
  } else {
    shortcusElement.style.transform = "translateX(0)";
    shortcusElement.style.transition = "transform 0.15s ease-in-out";
    iconTab.style.transform = "scaleX(0)";
  }
};
