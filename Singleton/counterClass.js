/*
    A class can be **instantiated once**, and can be acess globally.
    This single instance can be shared throughout our application.
    Singletons great for managing global state in an application.

    Restricting the instantiation to just one instance could potentially save a lot of memory space. 
    Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance, which is referenced throughout the application. 
    However, Singletons are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript.
*/

let instance;
let count = 0;

class Counter {
  // Unable to instantiate again to be a singleton.
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return count;
  }

  increment() {
    ++count;
  }

  decrement() {
    --count;
  }
}

// new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed.
const counter = Object.freeze(new Counter());

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