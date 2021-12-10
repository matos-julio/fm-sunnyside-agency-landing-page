const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".header__menu");

hamburger.addEventListener("touchstart", () => {
  navigation.classList.toggle("active");
});
