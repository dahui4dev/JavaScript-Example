## JavaScript 引用数据类型

本章内容较多，
引用类型的值（对象）是引用类型的一个实例。引用类型是一种数据结构，用于将数据和功能组织在一起。
ECMAScript 提供了很多原生引用类型。

### 1、Object类型

#### 1.1、创建对象的方式：

1. 使用构造函数：

```javascript
var person = new Object();
person.name = "wjh";
person.age = 26;
```

2. 使用对象字面量：

```javascript
var person = {
  name: "wjh",
  age: 26
}

var person = {};    // 等价于 new Object();
person.name = "wjh";
person.age = 26;
```

#### 1.2、读取对象属性：

```javascript
// 两种方式看起来没区别
alert(person.name);   // wjh
alert(person[name]);  // wjh

// 其实方括号形式可以使用变量
var propertyName = "name";
alert(person[propertyName]);   // wjh

// 方括号形式属性中包含非字母非数字字符。
person["first name"] = "wjh"
```
由于"first name"包含空格，所以不能用 点 语法来访问。然而方括号形式的却可以在属性名中包含“非字母非数字”的。

通常，除非必须使用变量来访问属性，否则我们建议使用点表示法。

### 2、Array类型

#### 2.1、数组创建方式

```javascript
// 1、使用构造函数：
var colors = new Array();

// new关键字可以省略
var colors = Array(); // 等价于上面一个

// 创建长度为20的数组
var colors = new Array(20);

// 向构造函数传递 包含的项
var colors = new Array("red", "blue", "green");

// 2、使用数组字面量表示法。
var colors = ["red", "blue", "green"];    // 创建一个包含3个字符串的数组
var names = [];                           // 创建一个空数组
var values = [1, 2, ];                    // 不推荐这样用，这样会创建一个包含 2 或 3 项的数组。实测在Chrome 63.0.3239.132（正式版本）创建为length=2 的数组。

```

#### 2.2、数组读取方式

使用索引读取

```javascript
var colors = ["red", "blue", "green"];
alert(colors[0]);       // 显示第一项
colors[2] = "black";    // 修改第三项
colors[3] = "brown";    // 新增第四项
```
说明：如果数组索引小于数组中的项数，则返回对应项的值。 设置数组的值也同样，但会替换指定位置的值。

**数组的项数保存在其 length 属性中，这个 length 属性有个特点————他不是只读的。即：修改 length 属性可以修改数组长度，也可以从数组的末尾移出项或向数组中添加新项。**


```javascript
var colors = ["red", "blue", "green"];    // 创建一个包含 3 个字符串的数组
colors.length = 2;      // 修改 length 属性，改为长度为 2
alert(colors[2]);   // 读取第三项，为：undefined
```
同理：减少项数会缩短数组长度。增加项数也会增加数组长度。新增加的位置的值都是 undefined。

#### 2.3、检测数组

常用检测数组的方式：

```javascript
// 1、使用 instanceof 操作符
if(value instanceof Array){
  // do something
}

// 2、使用 Array.isArray() 方法
if(Array.isArray(value)){
  // do something
}
```

#### 2.4、数组转换方法

所有对象都具有 toLocaleString()、toString() 和 valueOf() 方法。

调用数组的toString() 方法会返回由数组中每个值的字符串拼接而成的一个以逗号分隔的字符串。
看下面这个例子：

**注意最后两项**

```javascript 1.8
let colors = ['red', 'blue', 'green'];

console.log(colors.toString())           // red,blue,green
console.log(colors.toLocaleString())     // red,blue,green
console.log(colors.valueOf())            // [ 'red', 'blue', 'green' ]
console.log(colors)                      // [ 'red', 'blue', 'green' ]

alert(colors.valueOf());                 // red,blue,green
alert(colors);                           // red,blue,green
```

调用 valueOf() 返回的还是数组。实际上，调用数组的 valueOf() 会调用数组每个值的 toString() 方法并做拼接。
同样调用数组的 toLocaleString、toString，都会调用每个值的对应方法。

```javascript 1.8
let person1 = {
  toLocaleString: function(){
    return "1 => toLocaleString "
  },

  toString: function(){
    return "1 => toString "
  }
};

let person2 = {
  toLocaleString: function(){
    return "2 => toLocaleString "
  },

  toString: function(){
    return "2 => toString "
  }
};

let persons = [person1, person2];
alert(persons);                         // 1 => toString ,2 => toString
alert(persons.toString());              // 1 => toString ,2 => toString 
alert(persons.toLocaleString());        // 1 => toLocaleString ,2 => toLocaleString 
```

#### 2.5、数组栈方法

什么是栈？

- 栈是一种可以限制插入和删除项的数据结构。
- 栈是一种 **LIFO（Last-In-First-Out 后进先出）** 的数据结构。

栈方法：
- push()：从数组末尾逐个添加任意个项目， return 修改后的新数组长度
- pop()：从数组末尾移除最后一项，  return 移除的项。

```javascript 1.8

let person = new Array();
let count = person.push('wjh', 'Dennis', '26')
console.log(count)
console.log(person)

let rm = person.pop()
console.log(rm)
console.log(person)

```
#### 2.6、数组队列方法

什么是队列？
- 队列是一种 **FIFO（First-In-First-Out 先进先出）** 的数据结构。
- 队列在列表的末端添加项，从列表的前端移除项。

队列方法：
- shift()：从前端 **移除** 数组第一项，return 移除项，同时将数组长度减1.
- unshift()：从前端 **添加** 任意个项目，return 修改后的新数组长度。

```javascript 1.8

let person = new Array();                           // 创建一个数组
let count = person.push('wjh', 'Dennis', '26')      // 推入三项
console.log(count)                              
console.log(person)                                 // [ 'wjh', 'Dennis', '26' ]

let rm = person.shift()                             // 从前端移除一项
console.log(rm)                                     // 移除项
console.log(person)                                 // 移除后的数组   [ 'Dennis', '26' ]

```
#### 2.7、栈、队列小结：

正向栈使用：push() pop()

反向栈使用：unshift() shift()

```javascript

// TODO: 待补图说明

```

正向队列使用：push() shift() 从尾巴先进一个，再从头出去一个

反向队列使用：unshift() pop() 从头进去一个，再从尾巴先出一个

![队列图示](./img/005-queue.png)

























