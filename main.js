const DOMSelectors = {
  input: document.getElementById("input"),
  number: document.querySelectorAll(".number"),
  operation: document.querySelectorAll(".operation"),
  delete: document.getElementById("delete"),
  clear: document.getElementById("clear"),
};

DOMSelectors.number.forEach((button) => {
  button.addEventListener("click", function () {
    DOMSelectors.input.insertAdjacentHTML("beforeend", `${button.innerHTML}`);
  });
});

DOMSelectors.operation.forEach((button) => {
  button.addEventListener("click", function () {
    let number1 = DOMSelectors.input.innerHTML;
    console.log(number1);
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

DOMSelectors.enter.addEventListener("click", function () {});
