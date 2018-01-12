## JavaScript 基本概念-函数

### 1、理解参数

ECMAScript 函数的一个重要特点： 命名的参数只提供便利，但不是必须的。另外在命名参数方面，其他语言可能需要事先创建一个函数签名（即形参），而将来的调用必须与该签名一致。但在ECMAScript中，没有这些条条框框，解析器不会验证命名参数。运用这一特性，可实现函数的“重载”。


```javascript
function doAdd(arg1, arg2) {
  // 由于 arguments[0] 与 arg1 值相同，因此他们可以互换使用。
  // arguments 的值永远与对应命名参数的值保持同步。
  arguments[1] = 10;
  console.log(arg2);  // 10
}

doAdd(10, 20);

```

关于参数：没有传递值的命名参数将自动被赋予 undefined 值。这就跟定义了变量但又没有初始化一样。例如：

```javascript

function doAdd(arg1, arg2){
  console.log(arg1);  // 10
  console.log(arg2);  // undefined
}

doAdd(10)

```

#### 注意：
**ECMAScript 中的所有参数传递的都是值，不可能通过引用传递参数。**



### 2、没有重载

ECMAScript 函数不能像传统意义上那样实现重载。而在其他语言中，可以为一个函数编写两个定义，只要这两个定义的签名（接受的参数的类型和数量）不同即可。ECMAScript函数没有签名，因为其参数是由包含零或多个值的数组来表示的。而没有函数签名，真正的重载是不可能做到的。


### 小结：
ECMAScript 中的函数与其他语言中的函数有诸多不同之处。
- 无须指定函数的返回值，因为任何 ECMAScript 函数都可以在任何时候返回任何值。
- 实际上，未指定返回值的函数返回的是一个特殊的undefined值。
- ECMAScript 中也没有函数签名的概念，因为其函数参数是以一个包含零或多个值的数组的形式传递的。
- 可以向 ECMAScript 函数传递任意数量的参数，并且可以通过arguments 对象来访问这些参数。
- 由于不存在函数签名的特性，ECMAScript 函数不能重载。