## 在 HTML 中使用 JavaScript

### 1、`<script>`标签的位置

按照惯例`<script>`标签应该放在页面的`<head>`元素中，例如：

```html
<html>
<head>
  <title>Example HTML page</title>
  <!--通常写法-->
  <script type="application/javascript" src="test.js"></script>
</head>
<body>
  <!-- 这里放内容 -->
</body>
</html>
```

目的：

- 将需要外部引入的文件（css、js）在相同位置统一引入；

缺点：

- 页面必须等到js、css下载、解析、执行完成才开始渲染页面，出现白屏；

**解决方案：**

- **将`<script>`引用放在`<body>`最后。如下：**

```html
<html>
  <head>
    <title>Example HTML page</title>
  </head>
  <body>
    <!-- 这里放内容 -->
    <script type="application/javascript" src="test.js"></script>
  </body>
</html>
```

### 2、script 标签属性

`<script>`标签在HTML4.01中定义了6个属性：

#### 必须属性：
- type: 指示脚本的 MIME 类型

#### 可选属性：
- defer: 规定是否对脚本执行进行延迟，直到页面加载为止
- async: 规定异步执行脚本（仅适用于外部脚本）。
- charset: 规定在外部脚本文件中使用的字符编码。
- language: 已废弃，请使用 type 属性代替它。
- **src: 规定外部脚本文件的 URL（跨域运用了这个属性可访问其他域的特性）**

#### 结论
最稳妥的办法还是把`<script>`写在`<body>`底部，**没有兼容性问题，没有白屏问题，没有执行顺序问题**，高枕无忧，慎用defer和async，这要是为什么这两个属性不流行的原因。