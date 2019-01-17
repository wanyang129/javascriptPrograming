var person = {
  name: "hello"
};
console.log(person.name);
Object.defineProperty(person, "name", {
  configurable: false,
  writable: true,
  value: "你好"
});
console.log(person.name);
person.name = "ok";
console.log(person.name);
Object.defineProperty(person, "name", {
  writable: false,
  value: "oo"
})
console.log(person.name);