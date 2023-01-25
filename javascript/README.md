# Some basic before working with Node js

## Syncronous function vs Asyncronous function

**Example : **
```js
console.log("start")

console.log('end')
```
Its run one by one i.e firstly run start and then end function
- this is **Synchronous function**

### we want to log after some times but those does not block other code

**Example : **
```js
setTimeout(function() {
    console.log("set timer for asysnchnous....")
}, 5000) // 5 seconds

console.log("after asysnchnous")
```
 - setTimeout function is predefine fuction , it used to run code after some time
 - this function is calles **Asynchronous funciton**


## Promise

