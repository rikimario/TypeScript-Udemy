function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Mario";

  constructor() {
    console.log("Creating person");
  }
}

const pers = new Person();

console.log(pers);
