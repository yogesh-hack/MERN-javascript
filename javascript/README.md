# Some basic before working with Node js

## Syncronous function vs Asyncronous function

**Example:**
```js
console.log("start")

console.log('end')
```
Its run one by one i.e firstly run start and then end function
- this is **Synchronous function**

### we want to log after some times but those does not block other code

**Example:**
```js
setTimeout(function() {
    console.log("set timer for asysnchnous....")
}, 5000) // 5 seconds

console.log("after asysnchnous")
```
 - setTimeout function is predefine fuction , it used to run code after some time
 - this function is called **Asynchronous funciton**


## Promise
`A promise is something that does not happen immediately but may happen in future`
- promise are used to handle asynchronous events in javascript.
- it has four states :
    - pending : `request has been send to the servre`
    - fulfilled : `promised is succesfull data gotten from server`
    - rejected : `promise is failed, maybe server crashed or 404 error`
    - settled : `decision has been made, succed or failed but not pending`

### create own promise
- `Promise(resolve, reject)` arguments.
- resolve handle the promise if successful 
- reject handle the promise if reject
- `.then` funciton is used to get data if successed promise
- `.catch` functin is handle for errors.

**Example:**

```js
function register(){
    return new Promise((resolve,reject) => {
            setTimeout(() => {
            // return  reject("Error in database ....");
            console.log("Register is successfull...");
            resolve();
        },3000)
    });
}
```

```js
function sendemail(){
    return new Promise((resolve,reject) => {
            setTimeout(() => {
            console.log("email sent is successfull...");
            resolve();
        },3000)

    });
}
```

```js
function login(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            //return reject("Error in network server problems...")
        console.log("loging is successfull...");
         resolve();
    },5000)

    });
}
```

```js
function getdata(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log("get data is successfull...");
        resolve();
    },1000)

    });

}
```

```js
function dispaydata(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log(" displaying the user data...");
        resolve();
    },3000)

    });

}
```

```js
register()
    .then(sendemail)
    .then(login)
    .then(getdata)
    .then(dispaydata)
    .catch((err) => {
        console.log("Error: ",err)
    })
```
