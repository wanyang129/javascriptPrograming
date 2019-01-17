var book = {};
Object.defineProperties(book, {
  _year: {
    value: 2004
  },
  edition: {
    value: 1
  },
  year: {
    get: function () {
      return this._year
    },
    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition = newValue - 2004;
      }
    }
  }
});
// 使用Object.getOwnPropertyDescriptor()方法,可以取得给定属性的描述符
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor);
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

var descriptor2 = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor2);
console.log(descriptor2.value);
console.log(descriptor2.enumerable);
console.log(typeof descriptor2.get);