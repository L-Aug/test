/** 
 * 柯里化
 * 
*/


// 简单的
function add(x) {
    return function (y) {
        return x + y;
    };
};

let increment = add(1);
increment(2)
// 3



// 使用隐式参数
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
// 3



/**
 * 对函数进行柯里化
 * 去掉通用柯里化第一个参数(需要柯里化的函数)
 * 没有参数调用参数并返回结果
 * 有参数则添加参数并返回一个接受参数的函数
 */
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

let add = currying(function () {
    return [].reduce.call(arguments, function (a, b) { return a + b });
})

add(1)(2)()
// 3
