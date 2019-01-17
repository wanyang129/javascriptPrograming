"use strict";
var person = {
  name: "Hello"
};
Object.defineProperty(person, "name", {
  configurable: false,
  value: "China"
});
console.log(person.name);
Object.defineProperty(person, "name", {
  value: "ok",
  configurable: true,
  writable: false
});
console.log(person.name);
// person.name = "不可写";
// console.log(person.name);