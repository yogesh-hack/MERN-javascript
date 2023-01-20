// prerequire -> javascript , runtime ,
// NODE JS => not a lanaguge, runtime enviroment,run on server
// runtime => request ans response from server
//! RYAN DAHL (original developer of Node js)

// Core javascript run only on browser not server
// Node js => chrome javascript V8 engine(c++ program) + c++ programs
// add more feature -> npm package , file system etc

//! ======== Project start in nodejs ==========
// npm init
    // create package.json file and package.lock.json file
// npm install <package-name>  --> produnction depencies
// npm install -D nodemon  -> devDependecies (development dependencies)

// each file in nodejs has a module (module.js)

//! npm module
// const package = require('package-name');

// module has encapsulate like this
(function(name) {
    var age = 25
    console.log(name)
})('yogesh')

// console.log(age) // error

// ===== local module (module.js) file ======
// const register = require('./auth.js')
//
// register('yogesh')
// login('yogesh','12465465hjvjykjjgdf87')

const auth = require('./auth.js')

auth.register('yogesh')
auth.login('yogesh','127647hjbj268784b7tw')

// create a new file (auth.js)
const register = function(username){
    console.log(`user : ${username} is registered succesfully..`)
}
const login = function(username, pass){
    console.log(`user: ${username} has login in and password is ${pass}`)
}

// module.exports = register
// module.exports = login // conflict

// create an object
module.exports = {
    register : register,
    login : login
}

// ======= Core Module (inbuilt in nodejs) ============= (module.js) file
const path = require('path')

// Dirname
console.log('folder name :', path.dirname(__filename)) // current file's folder name
 // output => user/Desktop/javascript/module.js

// Filename
console.log("File name :", path.basename(__filename)) // output => module.js
// Extension name
console.log("extension name :", path.extname(__filename)) // output => .js

// Join
console.log("Join :", path.join(__dirname,"order","app.js")) // output => /user/Desktop/javascript/order/app.js


// ========== File System ====================
const fs = require('fs')

// make a directory
// mkdir(path,name,callback)
fs.mkdir(path.join(__dirname, '/test'),(err) => {
    if(err){
        console.log('something went wrong..',err)
        return;
    }
    console.log('folder created..')
})
// it created folder named (test)

// file create
fs.writeFile(path.join(__dirname,'test','test.txt'),'text inside in test file',(err) => {
    if(err){
        console.log(err);
        // throw err
    }
    // Append / add data in file
    fs.appendFile(path.join(__dirname,'test','test.txt'),'appending more data in test.txt file',(err)=>{
        if(err){
            throw err
        }
        console.log('append data is success...')
    })
    console.log("file is created...")
})

// Read file => (readFile(Asynchronous) and readFileSync(Synchronous))
fs.readFile(path.join(__dirname,'test','test.txt'),(err,data)=> {
    if(err){
        throw err
    }
    // console.log(data) // => it return buffer (binary formated data)
    const content = Buffer.from(data)
    console.log(content.toString())
})
// OR using utf-8
fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=> {
    if(err){
        throw err
    }
    console.log(data)
})

// =======Events module ==========
const emitter = require('events') // return class emitter

// make object from class
const myemitter = new emitter()
myemitter.on('event-name',(data) => {
    console.log(data)
})

// emiting the event
myemitter.emit('event-name',{
    name : 'yogesh',
    age : 21
})

// some practical example
class auth extends emitter {
    register(username){
        const.log('register is done..')
        this.emit('registered',username)
    }
}

const a = new auth()
//a.register('yogesh')
// listen
auth.on('registered',(username) => {
    console.log(`${username} is register.`)
})


// ================= Create server (HTTP module) ==========================

const http = require('http')
const app = http.createServer((request,response) => {
    response.end('<h1>this string view on web server</h1>')
})

app.listen(3000,() => {
    console.log('listening server on port 3000')
})
// port 3000 might not available on the server
const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log(`listening server on port ${PORT}`)
})

// PROBLEM : when we any change in file , we restart tyhe server again and again.
// so we use Nodemon module => it restart the server automaticaly when changes in file
// package.json file
"scripts": {
    "start": "node module.js",
    "dev" : "nodemon module.js"
}

// run with
npm run dev
