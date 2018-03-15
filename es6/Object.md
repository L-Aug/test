## Object.create
```javascript
Object.create(proto, [propertiesObject])
```
创建一个新对象 并且原型链指向第一个参数
```javascript
    let Animal = {
        color:"while",
    }
    let Cat = Object.create(Animal);
```