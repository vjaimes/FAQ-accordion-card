"use strict";

const tabsContainer = document.querySelector(".tabs-container");
const tabs = document.querySelectorAll(".tab");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const btns = document.querySelectorAll(".btn-tab");

const addActive = function (parent, child, btn) {
  tabs.forEach((tab) => tab.classList.remove("tab--active"));
  questions.forEach((Q) => Q.classList.remove("question--active"));
  answers.forEach((ans) => ans.classList.remove("answer--active"));
  btns.forEach((btn) => btn.classList.remove("btn-tab--active"));

  parent.classList.add("tab--active");
  parent.querySelector(".question").classList.add("question--active");
  child.classList.add("answer--active");
  btn.classList.add("btn-tab--active");
};

tabsContainer.addEventListener("click", function (e) {
  const parent = e.target.closest(".tab");
  const child = parent.querySelector(".answer");
  const btn = parent.querySelector(".btn-tab");

  addActive(parent, child, btn);
});
