check1 = 0;
check2 = 0;

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".preload");
  images.forEach(function (image) {
    var img = new Image();
    img.src = image.src;
    img.onload = function () {
      image.style.display = "block";
    };
  });
});

const form = document.querySelector("form");
const msg = document.querySelector("#error-m");
const msgName = document.querySelector("#error-n");
const email = document.querySelector("#exampleInputEmail1");
const name = document.querySelector("#name");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function showError() {
  if (!email.value.match(emailRegex)) {
    msg.style.display = "block";
    msg.innerHTML = "Please enter a valid email";
    email.classList.add("error-box-shadow");
    return false;
    check1 = 2;
  } else {
    msg.style.display = "none";
    msg.innerHTML = "";
    email.classList.remove("error-box-shadow");
    check1 = 1;
  }
}
function containsNumber(str) {
  return str.split("").some((char) => !isNaN(char) && char !== " ");
}
function showNameErr() {
  if (name.value === "" || name.value == null) {
    msgName.style.display = "block";
    msgName.innerHTML = "Please enter a name";
    name.classList.add("error-box-shadow");
    // return false;
    check2 = 2;
  } else {
    if (containsNumber(name.value)) {
      msgName.style.display = "block";
      msgName.innerHTML = "Please enter a name not a number";
      name.classList.add("error-box-shadow");
      // return false;
      check2 = 2;
    } else {
      msgName.style.display = "none";
      msgName.innerHTML = "";
      name.classList.remove("error-box-shadow");
      check2 = 1;
    }
  }
}
function loggg() {
  window.location.href = "login.html";
}

/* Example JavaScript for scroll animations */
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Example: Add class when element enters viewport
  const element = document.querySelector("#elementId");
  const elementPosition = element.getBoundingClientRect().top;
  if (elementPosition < window.innerHeight) {
    element.classList.add("animate-class");
  }
});

form.addEventListener("submit", (e) => {
  if (check1 == 1 && check2 == 1) {
    e.preventDefault();
    alert("successfully send");
    window.location.href = "index.html";
  } else {
    alert("please try again");
  }
});
