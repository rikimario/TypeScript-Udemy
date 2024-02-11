"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log("Logging...");
        console.log(constructor);
    };
}
// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: Function) {
//     const hookEl = document.getElementById(hookId);
//     if (hookEl) {
//       hookEl.innerHTML = template;
//     }
//   };
// }
// @WithTemplate("<h1>My Person Tag</h1>", "app")
// @Logger("LOGGING")
class Person {
    constructor() {
        this.name = "Mario";
        console.log("Creating person");
    }
}
const pers = new Person();
console.log(pers);
// ---
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
function LogTwo(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
class Product {
    //   @LogTwo
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
