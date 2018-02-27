有错误或理解不全面的地方 望指出

柯里化|部分求值

1.把多参数传入的函数拆成单参数函数，内部再返回调用下一个单参数函数，依次处理剩余的参数。

2.减少重复代码，延迟计算




 简单的

 ```javascript
function foo(x) {
    return function (y) {
        return x + y;
    };
};

let increment = foo(1);
increment(2)
> 3
```


 使用隐式参数
 ```javascript
function curryingAdd() {
    let args = [].slice.call(arguments);
    return _fun = function () {
        if (arguments.length == 0) {
            // reduce：累加器
            return [].reduce.call(args, function (a, b) { return a + b });
        } else {
            [].push.apply(args, arguments)
        }
        return _fun;
    }
}
curryingAdd(1)(2)()
> 3
```




 对函数进行柯里化
 
 去掉通用柯里化第一个参数(需要柯里化的函数)
 
 没有参数调用参数并返回结果
 
 有参数则添加参数并返回一个接受参数的函数
 ```javascript
function currying(fn) {
    let args = [].splice.call(arguments, 1);
    return _fun = function () {
        if (arguments.length == 0) {
            return fn.apply(this, args)
        } else {
            [].push.apply(args, arguments)
        }
        return _fun;
    }
}
 ```

对一个函数进行柯里化
  ```javascript
let add = currying(function () {
    return [].reduce.call(arguments, function (a, b) { return a + b });
})

add(1)(2)()
>  3

 ```


参考：

http://www.alloyteam.com/2013/08/javascript-zhong-you-qu-di-fan-ke-li-hua-ji-shu/

https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch4.html#不可或缺的-curry

https://www.jianshu.com/p/f88a5175e7a2






