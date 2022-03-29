const passElem = document.querySelector("#password");
const buttonElem = document.querySelector(".btn-login");
const formElem = document.querySelector("form");
const showPassElem = document.querySelector(".show-pass-box");

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
