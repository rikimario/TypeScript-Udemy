"use strict";
// const person = {
//   name: "Mario",
//   age: 31,
//   hobbies: ["Sports", "Gaming"],
// };
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Mario",
    age: 31,
    hobbies: ["Sports", "Gaming"],
    role: Role.ADMIN,
};
console.log(person.name);
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
