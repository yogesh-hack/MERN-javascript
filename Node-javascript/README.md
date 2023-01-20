# How to work with Node Js 

### prerequire  
- Basic Knowledge about javascript

# NODE JS 
- Node js is not a lanaguge
- it is runtime enviroment
- it help to run the server

### runtime
- request and response from server

   **RYAN DAHL (original developer of Node js)**

- Core javascript run only on browser not server

```Node js => chrome javascript V8 engine(c++ program) + c++ programs```
- add more feature -> npm package , file system etc.
- 
![images](https://user-images.githubusercontent.com/83384315/213704010-ed3e69f3-c462-43f5-91cd-f1b3a9c26615.png)

## Project start with nodejs 

#### npm init

- create **package.json** file and **package.lock.json** file

- `npm install <package-name>`  --> produnction dependencies
- `npm install -D nodemon`  -> devDependecies (development dependencies)

- each file in nodejs has a module e.g (module.js)

## Impport module in node js

```javascript
const package = require('package-name');
```

### module has encapsulate like this
```javascript
(function(name) {
    var age = 25
    console.log(name)
})('yogesh')
```

```console.log(age) // error```

## local module (module.js) file 
```javascript
 const register = require('./auth.js')

 register('yogesh')
 login('yogesh','12465465hjvjykjjgdf87')
 ```

```javascript
const auth = require('./auth.js')

auth.register('yogesh')
auth.login('yogesh','127647hjbj268784b7tw')
```
## create a new file (/auth.js)
```javascript
const register = function(username){
    console.log(`user : ${username} is registered succesfully..`)
}
const login = function(username, pass){
    console.log(`user: ${username} has login in and password is ${pass}`)
}
 module.exports = register
 module.exports = login // conflict
```

- `module.exports has conflicted to each other when called so we create an objects

```javascript
// create an object
module.exports = {
    register : register,
    login : login
}
```

## Core Module (inbuilt in nodejs)
:file_folder: (/module.js) file
### Path module
```javascript
const path = require('path')
```
##### Dirname
```javascript
console.log('folder name :', path.dirname(__filename)) // current file's folder name
 // output => user/Desktop/javascript/module.js
```
##### Filename
```javascript
console.log("File name :", path.basename(__filename)) // output => module.js
```
##### Extension name
```javascript
console.log("extension name :", path.extname(__filename)) // output => .js
```
##### Join
```javascript
console.log("Join :", path.join(__dirname,"order","app.js")) // output => /user/Desktop/javascript/order/app.js
```

## File System 
```javascript
const fs = require('fs')
```

##### make a directory
```javascript
// mkdir(path,name,callback)
fs.mkdir(path.join(__dirname, '/test'),(err) => {
    if(err){
        console.log('something went wrong..',err)
        return;
    }
    console.log('folder created..')
})
```
- it created folder named (test)

##### file create
```javascript
fs.writeFile(path.join(__dirname,'test','test.txt'),'text inside in test file',(err) => {
    if(err){
        console.log(err);
        // throw err
    }
    // Append /add data in file
    fs.appendFile(path.join(__dirname,'test','test.txt'),'appending more data in test.txt file',(err)=>{
        if(err){
            throw err
        }
        console.log('append data is success...')
    })
    console.log("file is created...")
})
```

##### Read file 
- readFile (Asynchronous)
- readFileSync (Synchronous)
```javascript
fs.readFile(path.join(__dirname,'test','test.txt'),(err,data)=> {
    if(err){
        throw err
    }
    // console.log(data) // => it return buffer (binary formated data)
    const content = Buffer.from(data)
    console.log(content.toString())
})
```
---------------------------- OR using utf-8 ------------------------
```javascript
fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=> {
    if(err){
        throw err
    }
    console.log(data)
})
```
## Events module
```javascript
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
```

## Some practical example
```javascript
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
```

## Create server (HTTP module)
```javascript
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
```

# PROBLEM
- when we any change in file , we restart the server again and again.

**so we use *Nodemon module* => it restart the server automaticaly when changes in file**

### ReWrite in package.json file
```json
"scripts": {
    "start": "node module.js",
    "dev" : "nodemon module.js"
}
```
## Run the server using command
```
npm run dev
```
