## JavaScript 变量、作用域、内存问题

### 一、变量：基础类型和引用类型的值

#### 1、动态的属性
定义基本类型的值和引用类型值的方式时类似的：创建一个变量并为该变量赋值。
- 引用类型：我们可以为添加/修改/删除属性和方法。

```
var person = new Object();
person.name = "Wjh";
alert(person.name);  // "Wjh"
```

- 基本类型：不能添加属性（虽然不会报错）。

```
var name = "Wjh";
name.age = 27;
alert(name.age);  // undefined
```

#### 2、复制变量值

这里就出现了我们熟悉的知识点：对象引用的概念。
基本类型：复制是值复制（复制的是值的副本）；
引用类型：复制是引用复制（复制的是引用指针的副本，实际的值还是同一个）；


#### 3、传递参数

**ECMAScript中所有的函数的参数都是按值传递的。**
把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。基本类型值的传递如同基本类型变量的复制一样，引用类型的传递，则如同引用类型变量的复制一样。

```javascript
function setName(obj){
  obj.name = "Wjh";
}

var person = new Object();
setName(person);
alert(person.name); // "Wjh"
```
以上代码创建了一个对象，并将其保存在了变量person中。然后，这个对象被传递到setName()函数中之后就被复制给了obj。在这个函数内部，obj和person引用的是同一个对象。换句话说，即使这个对象是按值传递的，obj也会按引用来访问同一个对象。于是函数内部为obj添加name属性后，函数外部的person也将有所反映；因为person指向的对象在堆内存中也只有一个，而且是全局对象。有很多开发人员错误地认为：在局部作用域中修改的对象会在全局作用域中反映出来，就说明参数是按引用传递的。为了证明对象是按值传递的，我们看一个例子：

```javascript
function setName(obj){
  obj.name = "Wjh";
  obj = new Object();
  obj.name = "Nicholas";
}

var person = new Object();
setName(person);
alert(person.name); // "Wjh"
```

这个例子与前一个例子的唯一的区别，就是在setName()函数中添加了两行代码：一行代码为obj重新定义了一个对象，另一行代码为该对象定义了一个带有不同值的name属性。在把person传递给setName()后，其name属性被设置为“Wjh”。然后，又将一个新对象赋给变量obj，同时将其name属性设置为“Nicholas”。如果person是按引用传递的，那么person就会自动被修改为指向其name属性值为“Wjh”的新对象。但是，当接下来在访问person.name时，显示的值仍然是“Wjh”。这说明即使在函数内部修改了参数的值，但原始的引用仍然保持未变。实际上，当在函数内部重写obj时，这个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即销毁。

> 可以把 ECMAScript 函数的参数想象成局部变量。


#### 4、检测类型

在检测基本数据类型时 typeof 是非常得力的助手，但在检测引用类型的时候，这个操作符就用处不大了。这就用到了下一个操作符：instanceof。

```javascript
result = variable instanceof constructor
```
### 二、垃圾收集

#### 1、标记清除
#### 2、引用计数
#### 3、性能问题
#### 4、管理内存










