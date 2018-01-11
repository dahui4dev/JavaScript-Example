## JavaScript中的数据类型

### 1、基本数据类型

ECMAScript 有 5 种原始类型（primitive type），即 Undefined、Null、Boolean、Number 和 String。

#### typeof 运算符

**对变量或值调用 typeof 运算符将返回下列值之一：**

- undefined - 如果变量是 Undefined 类型的
- boolean - 如果变量是 Boolean 类型的
- number - 如果变量是 Number 类型的
- string - 如果变量是 String 类型的
- object - 如果变量是一种引用类型或 Null 类型的

注释：您也许会问，为什么 typeof 运算符对于 null 值会返回 "Object"。这实际上是 JavaScript 最初实现中的一个错误，然后被 ECMAScript 沿用了。现在，null 被认为是对象的占位符，从而解释了这一矛盾，但从技术上来说，它仍然是原始值。

#### Number 类型

##### 特殊的 Number 值
> 几个特殊值也被定义为 Number 类型。前两个是 Number.MAX_VALUE 和 Number.MIN_VALUE，它们定义了 Number 值集合的外边界。所有 ECMAScript 数都必须在这两个值之间。
>
> 事实上，有专门的值表示无穷大，（如你猜到的）即 Infinity。Number.POSITIVE_INFINITY 的值为 Infinity。Number.NEGATIVE_INFINITY 的值为 -Infinity。
>
> 最后一个特殊值是 NaN，表示非数（Not a Number）。NaN 是个奇怪的特殊值。

**NaN 也不能用于算术计算。NaN 的另一个奇特之处在于，它与自身不相等**

#### Object 类型

ECMAScript 中的对象其实就是一组数据和功能的集合。对象可以通过执行new操作符后跟要创建的对象类型的名称来创建。而创建Object类型的实例并为其添加属性和（或）方法，就可以创建自定义对象，如下所示：

```javascript
// 创建对象
var o = new Object();

// 省略圆括号
var o = new Object;  // 有效，但不推荐
```
**这里有一个重要的思想：**
在ECMAScript中，Object类型是所有他的实例的基础。换句话说，Object类型所具有的任何属性和方法也同样存在于更具体的对象中。

##### Object的每个实例都有下列属性和方法。

- Constructor：构造函数；保存着用于创建当前对象的函数。
- hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty(*name*)）。
- isPrototypeOf(object)：用于检查传入的对象是否是另一个对象的原型。
- propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for-in语句来枚举。与hasOwnProperty()方法一样，作为参数的属性名必须以字符串指定。
- toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。
- toString()：返回对象的字符串表示。
- valueOf()：返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。

由于在ECMAScript中Object是所有对象的基础，因此所有对象都具有这些基本的属性和方法。

> 从技术角度讲，ECMA-262中对象的行为不一定适用于JavaScript中的其他对象。浏览器环境中的对象，比如BOM和DOM中的对象，都属于宿主对象，因为他们是由宿主实现提供和定义的。ECMA-626不负责定义宿主对象，因此宿主对象可能会也可能不会即成Object。

##### 









### 2、引用数据类型
