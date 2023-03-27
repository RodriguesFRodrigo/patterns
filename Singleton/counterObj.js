/*
    In JavaScript the same comportament can be make with Object.
*/

let count = 0;

const counter = {
  increment() {
    return ++count;
  },

  decrement() {
    return --count;
  }
}

Object.freeze(counter);

// redButton and blueButton use the some state.
const redButton = document.getElementById("red");
redButton.addEventListener("click", () => {
  counter.increment();
  console.log("Counter total: ", counter.getCount());
});

const blueButton = document.getElementById("blue");
blueButton.addEventListener("click", () => {
  counter.increment();
  console.log("Counter total: ", counter.getCount());
});