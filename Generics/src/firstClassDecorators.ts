function Logger(logString: string) {
  return function (constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

@WithTemplate("<h1>My Person Tag</h1>", "app")
// @Logger("LOGGING")
class Person {
  name = "Mario";

  constructor() {
    console.log("Creating person");
  }
}

const pers = new Person();

console.log(pers);
