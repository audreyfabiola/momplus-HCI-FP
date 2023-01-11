var slideIndex = 1;
var myTimer = null;
showSlides(slideIndex);            

// Next/previous controls
function plusSlides(n) {
    clearTimeout(myTimer);
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(myTimer);
    showSlides(slideIndex = n);    
}

// Slider
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n==undefined){n = ++slideIndex}
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
myTimer = setTimeout(showSlides, 4000);
}           


// Navigation Menu
let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

// Contact Us Alert
const btn = document.querySelector('.contact-form-btn');
const output = document.getElementById('output');

btn.addEventListener("click", function (event) {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let message = document.querySelector('#message').value;

  if (name == "" || email == "" || phone == "" || message == "") {
    const outputMessage = document.createElement('div');
    alert('Please fill out the all input fields!');
    output.appendChild(outputMessage);
    event.preventDefault();
    return;
  } else {
    alert("Message successfully sent!");
  }

});

