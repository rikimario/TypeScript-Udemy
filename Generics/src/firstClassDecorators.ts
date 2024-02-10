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

// ---

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

class Product {
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
