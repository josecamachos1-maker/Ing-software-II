import {sumar, mult} from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const first2 = document.querySelector("#primer2-numero");
const second2 = document.querySelector("#segundo2-numero");
const sum = document.querySelector("#sumar-form");
const multi = document.querySelector("#mult-form");
const result = document.querySelector("#resultado-div");
const div2 = document.querySelector("#mult-div");

sum.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  result.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

multi.addEventListener("submit", (event) => {
  event.preventDefault();

   const firstNumber = Number.parseInt(first2.value);
   const secondNumber = Number.parseInt(second2.value);

   div2.innerHTML = "<p>" + mult(firstNumber, secondNumber) + "</p>";
})


