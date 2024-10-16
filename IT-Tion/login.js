let check1;
let check2;
let check3;
const form = document.querySelector("form");
const msg = document.querySelector("#error-m");
const email = document.querySelector("#exampleInputEmail1");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function showError() {
  if (!email.value.match(emailRegex)) {
    msg.innerHTML = "Please enter a valid email";
    email.classList.add("error-box-shadow");
    // return false;
    check1 = 2;
  } else {
    msg.innerHTML = "";
    email.classList.remove("error-box-shadow");
    check1 = 1;
  }
}

const p1 = document.querySelector("#Password").value;
const c2 = document.querySelector("#cPassword").value;
const pError = document.querySelector("#pass-error");
const cError = document.querySelector("#cpass-error");

function checkPassword() {
  const p1 = document.querySelector("#Password").value;
  const c2 = document.querySelector("#cPassword").value;
  const pError = document.querySelector("#pass-error");
  const cError = document.querySelector("#cpass-error");

  if (p1.length < 6) {
    pError.innerHTML = "Password must be greater than 6 characters";
    document.querySelector("#Password").classList.add("error-box-shadow");
    check2 = 2;
  } else {
    pError.innerHTML = "";
    document.querySelector("#Password").classList.remove("error-box-shadow");
    check2 = 1;
  }

  // Check if Confirm Password is filled
  if (c2.trim() !== "") {
    // Check if passwords match
    if (p1 !== c2) {
      cError.innerHTML = "Password and Confirm Password do not match";
      document.querySelector("#cPassword").classList.add("error-box-shadow");
      check3 = 2;
    } else {
      cError.innerHTML = "";
      document.querySelector("#cPassword").classList.remove("error-box-shadow");
      check3 = 1;
    }
  } else {
    cError.innerHTML = "";
    document.querySelector("#cPassword").classList.remove("error-box-shadow");
    check3 = 0; // Reset check3 if Confirm Password is empty
  }

  // Reset error message if both checks are successful
  if (check2 === 1 && check3 === 1) {
    cError.innerHTML = "";
    document.querySelector("#cPassword").classList.remove("error-box-shadow");
  }
}
const myform = document.querySelector("#myform");
myform.addEventListener("submit", (e) => {
  if (check1 == 1 && check2 == 1 && check3 == 1) {
    e.preventDefault();
    alert("successfully logged in");
    window.location.href = "index.html";
  } else {
    alert("please try again");
    window.location.href = "login.html";
  }
});
