var person = {
  name: "hello"
};
Object.defineProperty(person, "name", {

});
console.log(person.name);
person.name = "world";
console.log(person.name);