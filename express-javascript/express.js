const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('public'))

const mainrouter = require('./routes/index')
const productrouter = require('./routes/products')
const Errorhandler = require('./errors/Errorhandler')

app.use(mainrouter)
app.use(productrouter)

app.use((req,res,next) => {
    return (
        res.render('error')
    )
})

app.use((err,req,res,next) => {

    if( err instanceof Errorhandler){
        res.status(err.status).json({
            error: {
                message : err.message,
                status : err.status
            }
        })
    }else{
        res.status(500).json({
            error: {
                message : err.message,
                status : err.status
            }
        })
    }
    console.log('Error :',err.message)
})

app.set('view engine','ejs')
app.listen(PORT,() => {
    console.log(`Listening server on ${PORT}`)
})
