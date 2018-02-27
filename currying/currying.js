/** 
 * 柯里化
 * 1.什么是柯里化
 * 2.为什么要用柯里化
 * 3.柯里化有什么优缺点
 * 4.什么是反柯里化
 * 
*/

// 柯里化函数
function curryingAdd() {
    let args = [].slice.call(arguments);
    return _fun = function () {
        if (arguments.length == 0) {
            return [].reduce.call(args, function (a, b) { return a + b });
        } else {
            [].push.apply(args, arguments)
        }
        return _fun;
    }
}
curryingAdd(1)(2)(3)()
// >  6

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
    // reduce：累加器
    return [].reduce.call(arguments, function (a, b) { return a + b });
})

add(1)(2)(3)()
//>  6
