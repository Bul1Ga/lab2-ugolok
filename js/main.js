var burger = document.querySelector(".header__burger");
var nav = document.querySelector(".nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("nav--open");
});

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Заявка не отправляется, это учебная страница");
});
