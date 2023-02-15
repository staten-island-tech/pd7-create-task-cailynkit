const DOMSelectors = {
  input: document.getElementById("input"),
  number: document.querySelectorAll(".number"),
  operation: document.querySelectorAll(".operation"),
  clear: document.getElementById("clear"),
};

DOMSelectors.number.forEach((button) => {
  button.addEventListener("click", function () {
    DOMSelectors.input.insertAdjacentHTML("beforeend", `${button.innerHTML}`);
  });
});

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.input.innerHTML = "";
});
