# Some basic before working with Node js

## Syncronous function vs Asyncronous function
Synchronous and asynchronous are two different ways of executing code in JavaScript.

Synchronous code is executed in a sequential manner, where each line of code waits for the previous line to finish before executing. This means that if there is a long-running operation in the code, the execution of the code will be blocked until that operation is complete.

Asynchronous code, on the other hand, allows other code to run while a long-running operation is being performed. This is accomplished using callbacks, promises, and async/await functions. When an asynchronous operation is started, the JavaScript engine continues executing the code that comes after the asynchronous operation, and when the operation is complete, a callback function is called to handle the result.

In general, asynchronous code is used for long-running operations such as network requests, database queries, and file I/O, while synchronous code is used for simpler operations that can be completed quickly.

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

## Callback In javaSccript
- Callbacks are functions that are passed as arguments to other functions and are called when an asynchronous operation is complete. 
- The callback function can then handle the result of the operation.

```js
function register(callback){
    setTimeout(() => {
        console.log("Registet is successfull...");
        callback();
    },3000)
}
```
```js
function sendemail(callback){
    setTimeout(() => {
        console.log("email sent is successfull...");
        callback();
    },3000)
}
```
```js
function login(callback){
    setTimeout(() => {
        console.log("loging is successfull...");
        callback();
    },5000)
}
```
```js
function getdata(callback){
    setTimeout(() => {
        console.log("get data is successfull...");
        callback();
    },1000)
}
```
```js
function dispaydata(){
    setTimeout(() => {
        console.log(" displaying the user data...");
    },3000)
}
```
```js
register(() => {
    sendemail(() => {
        login(() => {
            getdata( () => {
                dispaydata()
            })
        })
    })
})
```

## Promise
`A promise is something that does not happen immediately but may happen in future`
- Promises, on the other hand, provide a more structured way of handling asynchronous operations in JavaScript. Promises represent a value that may not be available yet, but will be at some point in the future. When the value becomes available, the promise is fulfilled and a then method can be used to handle the result.
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
## Async And Await
- async/await is a syntax in JavaScript that allows you to write asynchronous code in a synchronous style. 
- It makes it easier to write and understand asynchronous code by avoiding the need for callbacks or promise chains.
- The async keyword is used to define a function as asynchronous. An asynchronous function always returns a promise, which can be resolved with a value or rejected with an error.
- The await keyword can be used inside an asynchronous function to pause the execution of the function until a promise is resolved.
-  When an await expression is encountered, the JavaScript engine suspends the execution of the function until the promise is resolved.
-   Once the promise is resolved, the result is returned and the execution of the function resumes.


```js
async function auth(){
    // console.log("authentication is done....")
    try{
        await register();
        await sendemail();
        await login();
        await getdata();
        await dispaydata();
    }catch(err){
        console.log("Error:",err)
        throw new Error();
    }
}

auth().then(() => {
    console.log("All function is execute...")
}).catch((err) => {
    console.log("Error:",err)
})
```
