console.log("script.js is running!");

const navSlide = () => {
  const burger = document.querySelector(".nav-button");
  const nav = document.querySelector(".nav-bar");

  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("btn-active"); // Toggle active button
  });
};

navSlide();

// Finder knappen:
let mybutton = document.getElementById("myBtn");

// Når brugeren scroller ned til 20 px fra toppen, bliver knappen vist
window.onscroll = () => {
  scrollFunction();
};

window.onload = scrollFunction();

function scrollFunction() {
  if (window.scrollY > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Når brugeren trykker på knappen, bliver man sendt op i toppen af siden
window.topFunction = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
