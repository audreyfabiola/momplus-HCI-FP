// Calculate Due Date
function calculatedDate(){
  const lastPeriodDate = document.getElementById("begin").value
  const cycleLength = document.getElementById("mySelect").value
  const calculation = (280 - 21 + parseInt(cycleLength))

  if (lastPeriodDate == "" || cycleLength == "") {
    alert("Please fill out the input fields!");
    return;
  }

  var date = new Date(lastPeriodDate);
  date.setDate(date.getDate() + calculation);

  var dueDate = String(date).slice(4,16);

  document.querySelector("#result").innerHTML = dueDate;
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
