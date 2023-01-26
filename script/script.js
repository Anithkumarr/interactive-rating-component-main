//elements

// inputs
const ratingBtnEl = document.querySelectorAll(".btn-rating");
const btnSubmit = document.getElementById("btn-submit");
const btnOK = document.getElementById("btn-ok");

//outputs
const thankCardEl = document.getElementById("thankyou-card");
const cardEl = document.getElementById("main-card");
const outputEl = document.getElementById("select");

//global variables
let rating;

//functions
function init() {
  rating = 0;
  outputEl.innerText = 0;
}

const displayUI = function (index) {
  for (let i = 0; i < ratingBtnEl.length; i++)
    if (i === index) {
      ratingBtnEl[i].classList.add("selected");
    } else {
      ratingBtnEl[i].classList.remove("selected");
    }
};

//event listeners

for (let i = 0; i < ratingBtnEl.length; i++) {
  ratingBtnEl[i].addEventListener("click", function () {
    rating = Number(this.value);
    displayUI(rating - 1);
  });
}

// by clicking submit ,thankyou card will open

btnSubmit.addEventListener("click", function () {
  if (rating === 0) {
    alert("Select a valid rating");
  } else {
    thankCardEl.classList.remove("hidden");
    cardEl.classList.add("hidden");

    outputEl.innerText = `You Selected ${rating} out of 5`;
  }
});

//by clicking ok , rating card will return default

btnOK.addEventListener("click", function () {
  thankCardEl.classList.add("hidden");
  cardEl.classList.remove("hidden");
  init();

  for (let i = 0; i < ratingBtnEl.length; i++) {
    ratingBtnEl.classList.remove("selected");
  }
});
