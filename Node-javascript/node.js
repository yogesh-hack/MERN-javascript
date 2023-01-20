
(function(name) {
    var age = 25
    console.log(name)
})('yogesh')

const register = require('./auth.js')

register('yogesh')
login('yogesh','12465465hjvjykjjgdf87')

const auth = require('./auth.js')

auth.register('yogesh')
auth.login('yogesh','127647hjbj268784b7tw')

const register = function(username){
    console.log(`user : ${username} is registered succesfully..`)
}
const login = function(username, pass){
    console.log(`user: ${username} has login in and password is ${pass}`)
}

// create an object
module.exports = {
    register : register,
    login : login
}

const path = require('path')
console.log('folder name :', path.dirname(__filename))

console.log("File name :", path.basename(__filename)) // output => module.js

console.log("extension name :", path.extname(__filename)) // output => .js

console.log("Join :", path.join(__dirname,"order","app.js")) // output => /user/Desktop/javascript/order/app.js

const fs = require('fs')

fs.mkdir(path.join(__dirname, '/test'),(err) => {
    if(err){
        console.log('something went wrong..',err)
        return;
    }
    console.log('folder created..')
})

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

fs.readFile(path.join(__dirname,'test','test.txt'),(err,data)=> {
    if(err){
        throw err
    }
    // console.log(data) 
    const content = Buffer.from(data)
    console.log(content.toString())
})

fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=> {
    if(err){
        throw err
    }
    console.log(data)
})

const emitter = require('events') // return class emitter

const myemitter = new emitter()
myemitter.on('event-name',(data) => {
    console.log(data)
})

myemitter.emit('event-name',{
    name : 'yogesh',
    age : 21
})

class auth extends emitter {
    register(username){
        const.log('register is done..')
        this.emit('registered',username)
    }
}

const a = new auth()
auth.on('registered',(username) => {
    console.log(`${username} is register.`)
})


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
