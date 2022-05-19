"use strict";
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
