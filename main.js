const DOMSelectors = {
  input: document.getElementById("input"),
  number: document.querySelectorAll(".number"),
  operation: document.querySelectorAll(".operation"),
  delete: document.getElementById("delete"),
  clear: document.getElementById("clear"),
  enter: document.getElementById("enter"),
};

let number1;
let number2;
let operation;

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
      console.log(number1);
    } else if (
      DOMSelectors.input.innerHTML.includes("+") ||
      DOMSelectors.input.innerHTML.includes("-") ||
      DOMSelectors.input.innerHTML.includes("*") ||
      DOMSelectors.input.innerHTML.includes("/")
    ) {
      DOMSelectors.input.insertAdjacentHTML("beforeend", `${button.innerHTML}`);
      number2 = (number2 || "") + button.innerHTML;
      console.log(number2);
    }
  });
});

/* DOMSelectors.number.forEach((button) => {
  button.addEventListener("click", function () {
    if (
      DOMSelectors.input.innerHTML.includes("+") ||
      DOMSelectors.input.innerHTML.includes("-") ||
      DOMSelectors.input.innerHTML.includes("*") ||
      DOMSelectors.input.innerHTML.includes("/")
    ) {
      DOMSelectors.input.insertAdjacentHTML("beforeend", `${button.innerHTML}`);
      number2 = DOMSelectors.input.innerHTML;
      console.log(number2);
    } else {
      DOMSelectors.input.insertAdjacentHTML("beforeend", `${button.innerHTML}`);
      number1 = DOMSelectors.input.innerHTML;
      console.log(number1);
    }
  });
}); */

DOMSelectors.operation.forEach((button) => {
  button.addEventListener("click", function () {
    DOMSelectors.input.insertAdjacentHTML("beforeend", `${button.innerHTML}`);
  });
});

DOMSelectors.delete.addEventListener("click", function () {
  let newNumber = DOMSelectors.input.innerHTML.slice(0, -1);
  DOMSelectors.input.innerHTML = `${newNumber}`;
});

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.input.innerHTML = "";
});

DOMSelectors.enter.addEventListener("click", function () {
  if (DOMSelectors.input.innerHTML.includes("+")) {
    let sum = number1 + number2;
    console.log(sum);
    DOMSelectors.input.innerHTML = `${sum}`;
  }
});
