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











### 3、Date类型

### 4、RegExp类型

### 5、Function类型

### 6、基本包装类型

### 7、单体内置对象