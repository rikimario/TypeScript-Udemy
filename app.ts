// const person = {
//   name: "Mario",
//   age: 31,
//   hobbies: ["Sports", "Gaming"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

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
