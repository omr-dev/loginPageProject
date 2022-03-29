const mailElem = document.querySelector("#email");
const passElem = document.querySelector("#password");
const buttonElem = document.querySelector(".btn-login");
const formElem = document.querySelector("form");
const showPassElem = document.querySelector(".show-pass-box");
const alertElem = document.querySelector(".alert");

showPassElem.addEventListener("change", () => {
  if (showPassElem.checked) {
    passElem.type = "text";
  } else {
    passElem.type = "password";
  }
});

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
});

buttonElem.addEventListener("click", checkLogin);

function checkLogin() {
  if (checkUser({ mail: mailElem.value, pass: passElem.value })) {
    showAlert({
      type: "success",
      message:
        " You are logged in successfully. You are directed to profile page.",
    });
  } else {
    showAlert({
      type: "danger",
      message: "Wrong e-mail / password. Please try again.",
    });
  }
}
function checkUser({ mail, pass }) {
  return false;
}
function showAlert({ type, message }) {
  alertElem.className += ` alert-${type}`;
  alertElem.innerText = message;
  alertElem.style.display = "block";
}
