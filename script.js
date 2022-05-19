"use strict";
// close/open modal

const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-question");
const modal = document.querySelector(".add-question");
openModal.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("display");
});
closeModal.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("display");
});

//

// take data from user input
const questionInput = document.getElementById("question-input");
const answerInput = document.getElementById("question-answer");
const saveQuestion = document.querySelector(".save-question");

saveQuestion.addEventListener("click", getInput);
function getInput(e) {
  e.preventDefault();
  let q = questionInput.value;
  let a = answerInput.value;
  if (a === "" || q === "") alert("Adauga intrebare si raspuns");
  else {
    createCard(q, a);
    // clear(q, a);
  }
}
// const clear = function (q, a) {
//   q.value = "";
//   a.value = "";
// };
// create card
const cardCreate = document.querySelector(".cards");
const createCard = function (a, q) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <div class="card-created">
  <h1 class="question">${a}</h1>
  <button class="hide">Hide/Answer</button>
  <h1 class="answer ">${q}</h1>
  </div>
  <button class="edit">Edit</button>
  <button class="remove">Remove</button> 
  `;
  cardCreate.appendChild(card);

  let hideBtn = document.querySelector(".hide");
  let ha = document.querySelector(".answer");
  ha.style.display = "none";

  hideBtn.addEventListener("click", function (e) {
    e.preventDefault();
    ha.style.removeProperty("display");
  });
};
