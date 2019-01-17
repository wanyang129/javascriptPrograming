var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function () {
  console.log(this.name);
}
// 对象的属性在创建时都带有一些特征值
// 对象字面量
var person = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName: function () {
    console.log(this.name);
  }
}
/**
 * Configurable:表示能否通过delete删除属性从而重新定义属性,能否修改属性的特性,或者能否吧属性修改为访问器属性.默认值是true
 * Enumerable:表示能否通过for-in循环返回属性.默认值为true
 * Writable:表示能否修改属性的值.默认值为true
 * Value:包含这个属性的数据值,读取属性值的时候,从这个位置读,写入属性的时候,把新值保存在这个位置.默认值为undefined
 */

// 要修改属性默认的特性,必须使用Object.defineProperty()方法.这个方法接收三个参数:属性所在的对象、属性的名字和一个描述符对象.
// 其中,描述符对象的属性必须是:configurable、enumerable、writable和value.
// 修改其中的一个或多个值,可以修改对应的特性值.
