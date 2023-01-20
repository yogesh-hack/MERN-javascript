const apikeymiddleware = require('../middleware/api');
const router = require('express').Router();
router.get('/', (req,res) => {
    res.render('index', {
        title : 'My HomePage'
    })
})

router.get('/login',(req,res) => {
    res.render('login', {
        title : 'My Login page'
    })
})

router.get('/download',(req,res)=> {
    res.download(path.resolve(__dirname) + '/public/login.html');
})

module.exports = router