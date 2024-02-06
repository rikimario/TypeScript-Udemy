// const person = {
//   name: "Mario",
//   age: 31,
//   hobbies: ["Sports", "Gaming"],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Mario",
    age: 31,
    hobbies: ["Sports", "Gaming"],
    role: Role.ADMIN,
};
console.log(person.name);
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
