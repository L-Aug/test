## Object.create
语法:
```javascript
Object.create(proto, [propertiesObject])
```
创建一个新对象 并且原型链指向第一个参数对象  可用来实现类的继承
```javascript
    let Animal = {
        color:"while",
    }
    let Cat = Object.create(Animal);
```

    
参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
