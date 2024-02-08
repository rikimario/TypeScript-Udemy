"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Mario" }, { age: 31 });
console.log(mergedObj.age);
