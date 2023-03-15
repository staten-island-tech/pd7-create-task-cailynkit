const DOMSelectors = {
  input: document.getElementById("input"),
  history: document.getElementById("history"),
  number: document.querySelectorAll(".number"),
  operation: document.querySelectorAll(".operation"),
  delete: document.getElementById("delete"),
  clear: document.getElementById("clear"),
  clearAll: document.getElementById("clearAll"),
  enter: document.getElementById("enter"),
};

let number1;
let number2;
let operation;
let newNumber1;
let newNumber2;
let answer;
const answerHistory = [];

DOMSelectors.number.forEach((button) => {
  button.addEventListener("click", function () {
    if (
      DOMSelectors.input.innerHTML.includes("+") === false &&
      DOMSelectors.input.innerHTML.includes("-") === false &&
      DOMSelectors.input.innerHTML.includes("*") === false &&
      DOMSelectors.input.innerHTML.includes("/") === false
    ) {
      DOMSelectors.input.insertAdjacentHTML("beforeend", `${button.innerHTML}`);
      number1 = DOMSelectors.input.innerHTML;
    } else if (
      DOMSelectors.input.innerHTML.includes("+") ||
      DOMSelectors.input.innerHTML.includes("-") ||
      DOMSelectors.input.innerHTML.includes("*") ||
      DOMSelectors.input.innerHTML.includes("/")
    ) {
      DOMSelectors.input.insertAdjacentHTML("beforeend", `${button.innerHTML}`);
      number2 = (number2 || "") + button.innerHTML;
    }
  });
});

DOMSelectors.operation.forEach((button) => {
  button.addEventListener("click", function () {
    DOMSelectors.input.insertAdjacentHTML("beforeend", `${button.innerHTML}`);
  });
});

DOMSelectors.delete.addEventListener("click", function () {
  let deletedNumber = DOMSelectors.input.innerHTML.slice(0, -1);
  DOMSelectors.input.innerHTML = `${deletedNumber}`;
});

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.input.innerHTML = "";
});

DOMSelectors.clearAll.addEventListener("click", function () {
  DOMSelectors.input.innerHTML = "";
  DOMSelectors.history.innerHTML = "";
});

DOMSelectors.enter.addEventListener("click", function () {
  if (DOMSelectors.input.innerHTML.includes("+")) {
    newNumber1 = parseFloat(number1);
    newNumber2 = parseFloat(number2);
    answer = newNumber1 + newNumber2;
    answerHistory.push(`${newNumber1}+${newNumber2}=${answer}`);
    DOMSelectors.input.innerHTML = `${answer}`;
    number1 = answer;
    number2 = "";
  }
  if (DOMSelectors.input.innerHTML.includes("-")) {
    newNumber1 = parseFloat(number1);
    newNumber2 = parseFloat(number2);
    answer = newNumber1 - newNumber2;
    answerHistory.push(`${newNumber1}-${newNumber2}=${answer}`);
    DOMSelectors.input.innerHTML = `${answer}`;
    number1 = answer;
    number2 = "";
  }
  if (DOMSelectors.input.innerHTML.includes("*")) {
    newNumber1 = parseFloat(number1);
    newNumber2 = parseFloat(number2);
    answer = newNumber1 * newNumber2;
    answerHistory.push(`${newNumber1}*${newNumber2}=${answer}`);
    DOMSelectors.input.innerHTML = `${answer}`;
    number1 = answer;
    number2 = "";
  }
  if (DOMSelectors.input.innerHTML.includes("/")) {
    newNumber1 = parseFloat(number1);
    newNumber2 = parseFloat(number2);
    answer = newNumber1 / newNumber2;
    answerHistory.push(`${newNumber1}/${newNumber2}=${answer}`);
    DOMSelectors.input.innerHTML = `${answer}`;
    number1 = answer;
    number2 = "";
  }
  DOMSelectors.history.insertAdjacentHTML("beforeend", `${answerHistory.slice(-1)} <br />`);
});
