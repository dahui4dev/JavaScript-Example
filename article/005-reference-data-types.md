## JavaScript 引用数据类型

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

### 3、Date类型

### 4、RegExp类型

### 5、Function类型

### 6、基本包装类型

### 7、单体内置对象