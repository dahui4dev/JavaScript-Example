/**
 * 异步队列
 */
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(new Date, i);
  }, 1000);
}
console.log(new Date, i);

/**
 * 按顺序输出
 */
for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(new Date, j);
    }, 1000)
  })(i);
}
console.log(new Date, i);


/**
 * 增加时间间隔
 */
for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(new Date, j);
    }, 1000 * j)
  })(i);
}
console.log(new Date, i);


