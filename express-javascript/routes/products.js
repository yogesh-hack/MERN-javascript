const router = require('express').Router();
const Errorhandler = require('../errors/Errorhandler');
const apikey = require('../middleware/api');
const products = require('../productsData')

router.get('/products', (req,res) => {
    res.render('products', {
        title : 'Products page!'
    })
})

router.get('/api/products', (req,res) => {
    res.json(products)
})

router.post('/api/products',apikey, (req,res,next) => {
    
    const { name,price } = req.body;
    if(!name || !price){
        next(Errorhandler.notfoundError());
    }
    const product = {
        name,
        price,
        id : new Date().getTime().toString()
    }
    products.push(product);
    res.json(product)
})
router.delete('/api/products/:productId', (req,res) => {
    products = products.filter((product) => req.params.productId != product.id);
    res.json({status : 'Ok'})
})

module.exports = router