// Synchrounous VS asynchronous javascript
// Imporatant feature in js and more powerfull for use it

// It does not block to other code

// Synchronous functions -> run one by one
console.log("strart")

console.log("end")

//  Asynchromous function -> use settimeout()
setTimeout(function() {
    console.log("set timer for asysnchnous....")
}, 5000) // 5 seconds

console.log("after asysnchnous")

// all event addEventListener() <- asynchronous function

// setTimeout(() => {
//     console.log("timer  0 second....")
// }, 0)

console.log("other applications work..")

function wait(){
    let ms = 3000 + new Date().getTime();
    while(new Date() < ms ) {}
}

setTimeout(() => {
    console.log("timer 1 second....")
}, 1000 ) // 1 second

wait() // synchrnous function call

// summary -> not block to other applicarion work
// example-> server request , database server ...

// =========== CallBack and Pomises and Await and Async =================

// Suppose events in applications
/*
1. register to user
2. sendemail to user
3. login to user
4. getdat from user
5. displaydata to user*/

function register(callback){
    setTimeout(() => {
        console.log("Registet is successfull...");
        callback();
    },3000)
}

function sendemail(callback){
    setTimeout(() => {
        console.log("email sent is successfull...");
        callback();
    },3000)
}

function login(callback){
    setTimeout(() => {
        console.log("loging is successfull...");
        callback();
    },5000)
}

function getdata(callback){
    setTimeout(() => {
        console.log("get data is successfull...");
        callback();
    },1000)
}

function dispaydata(){
    setTimeout(() => {
        console.log(" displaying the user data...");
    },3000)
}


register(() => {
    sendemail(() => {
        login(() => {
            getdata( () => {
                dispaydata()
            })
        })
    })
})

// ============== PROMISE =============
// state of promise -> pending, resolve, reject

function register(){
    return new Promise((resolve,reject) => {
            setTimeout(() => {
            // return  reject("Error in database ....");
            console.log("Register is successfull...");
            resolve();
        },3000)
    });
}

function sendemail(){
    return new Promise((resolve,reject) => {
            setTimeout(() => {
            console.log("email sent is successfull...");
            resolve();
        },3000)

    });
}

function login(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            //return reject("Error in network server problems...")
        console.log("loging is successfull...");
         resolve();
    },5000)

    });
}

function getdata(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log("get data is successfull...");
        resolve();
    },1000)

    });

}

function dispaydata(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log(" displaying the user data...");
        resolve();
    },3000)

    });

}

register()
    .then(sendemail)
    .then(login)
    .then(getdata)
    .then(dispaydata)
    .catch((err) => {
        console.log("Error: ",err)
    })

console.log("other applications work....")

// =============================== Await and async ============================

//! allow to write asynchnous code, mainly used with promises
//! asysnc keyword is return promise automatically

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

console.log("other application work..")



