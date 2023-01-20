# How to use Express JS full docs

- if use of node js , we have to write more code to handle request and responce from server
- complex to write a code in node js so use express js

#### File paths structure look like..

![path](https://user-images.githubusercontent.com/83384315/213653431-6df12044-319a-4313-94a2-0fbf37294932.png)

```javascript
// import express module
const express = require('express')
const path = require('path')

// create express server(app)
const app = express()
const PORT = process.env.PORT || 5000
```
**To listen the server wth PORT Number with default 5000**
```http://localhost:5000/```

```javascript
app.listen(PORT,() => {
    console.log(`Listening server on ${PORT}`)
})
```

we tell to the express about all static files in which folder i.e **(public)**

```javascript
app.use(express.static('public')) // this is built-in middleware function in express
``` 

 ### create a static page
 ```javascript
// get request ( / )
app.get('/',(request,responce) => {
        responce.send('<h1>This is Express server</h1>')
        responce.sendFile(path.resolve(__dirname) + '/index.html')
})

// login request (/login)
app.get('/login',(request,responce) => {
    responce.sendFile(path.resolve(__dirname) + '/login.html')
})
```
### create a template enigine pages (ejs)
For creating a dynamic site => template engine -> (ejs) or (pug)
installing :  `npm install ejs`

Tell to express , we use template engine(ejs)
```javascript
app.set('view engine','ejs')
console.log(app.get('view engine'));
```
by default, it search templates engine file in views's folder.

if we want to change a folder name
```javascript
app.set('views',path.resolve(__dirname) + '/templates');
```

### Apply Routing of all template engine (ejs) files
- gave title dynamically

```javascript
app.get('/',(request,responce) => {
         responce.render('index', {
            title : 'My Homepage'
         }) //  for template engines
 })

// login request (/login)
app.get('/login',(request,responce) => {
    responce.sendFile(path.resolve(__dirname) + '/login.html')
    responce.render('login', {
         title : 'My Login page' 
    })
})
```

### For downlaod any files gave best way by express -> **Use Download method**
```javascript
app.get('/download',(req,res)=> {
    res.download(path.resolve(__dirname) + '/public/login.html');
})
```


### more routing in Server file -> complex code so express have a router feature
- so we create a `routes` folder in which write all file's routes

![routes](https://user-images.githubusercontent.com/83384315/213654656-0efbb474-bd5f-4a9a-bf09-84cb622768b6.png)

*render all routes from index.js*

```javascript
    const mainrouter = require('./routes/index')
    const productrouter = require('./routes/products')
    
    app.use(mainrouter)
    app.use(productrouter)
```
**routes/index.js**
```javascript
 // import express to Router method
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
```

# Express MiddleWare 

Client(Request) -> -> -> ->  { Middle of ssomething }   -> -> -> -> Responce ->
                                    ⇓
            check the (api key valid/ invalid) or (auth is fail/pass) 

![download](https://user-images.githubusercontent.com/83384315/213655753-39a20e0b-1a4d-4e48-8159-070ff077a0c3.png)


## We create simple application using React and Rest API 
- fastest way to use react using **CDN**
```html
   <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- the extension of react js is **JSX** which does not understand by browser while using *react CDN*
- so we have use to compile from JSX into JS from **Babel** tool
```html
 <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
##### Complete code of `views/products.ejs`
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <%- include('../partition/head.ejs');%>
    <title>
        <%= title %>
    </title>
</head>
<body>
    <%- include('../partition/nav.ejs'); %> 
    <h1>Products Store</h1>
   <div class="container mt-4">
    <h2>Our products!</h2>
    <!-- build react app with rest API -->
    <div id="app"></div>
   </div>

   <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
     
   <!-- Babel JSX into Js for compilation -->
   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
   <!-- react components -->
   <script type="text/babel" src="/js/app.js"></script>
</body>
</html>
```

const apikeymiddleware = require('../middleware/api');


// router.get('/api/products',apikeymiddleware,(req,res)=> {
//    res.json([
//     {
//         id:'123',
//         name: 'lenskart'
//     },
//     {
//         id:'124',
//         name: 'boat'
//     }
//    ])
// })


module.exports = router



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

//! ========= POST methods use =================
router.post('/api/products',apikey, (req,res,next) => {
    
    const { name,price } = req.body;
    if(!name || !price){
        next(Errorhandler.notfoundError());
        // throw new Error("All filed are require..")
        // return res.status(422).json({error : "All field are are require!"})
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

// we do initialized the react

//? create components
//! JSX (react file) which does not understand by browser -> it gave error
const App = () => {
    const [products, setproducts] = React.useState([]);
    //! create state for form
    const [form,setForm] =  React.useState({
        name : '',
        price : ''
    })

    React.useEffect(() => {
        fetchproducts();
    }, [])
    
    function fetchproducts(){
        fetch('/api/products')
        .then((res) => res.json())
        .then(data => {
            // console.log(data)
            setproducts(data)
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        if (!form.name || !form.price){
            return;
        }
        fetch('/api/products', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data => {
            fetchproducts();
            setForm({name: '', price : ''});
        })
    }

    function updateForm(event, field){
        if(field === 'name'){
            setForm({
                ...form,
                name: event.target.value
            });
        }else if(field === 'price'){
            setForm({
                ...form,
                price: event.target.value
            });
        }
    }

    const deleteProduct = (productId) => {
        fetch(`/api/products/${productId}`, {
            method : 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
            fetchproducts();
           // console.log(data)
        })
    }


    return (
        <>
        <div className="card">
            <div className="card-header">
                Add a Product
            </div>
            <div className="card-body">
                <form onClick={handleSubmit}>
                    <input value={form.name} onChange={ () => updateForm(event,'name')} type='text' placeholder='Product Name' className='form-control mt-3'/>
                    <input value={form.price} onChange={ () => updateForm(event,'price')} type='text' placeholder='Product Price' className='form-control mt-3'/>
                    <button type='submit' className='btn btn-primary mt-3'>Add</button>
                </form>
            </div>
        </div>
        <hr></hr>
        <h5>Product list</h5>
        <ul className="list-group mt-3">
            {
                products.map((product) => {
                    return (
                        <li key={product.id} className="list-group-item d-flex justify-content-between" aria-current="true">
                            <strong>{product.name} : </strong>
                            <div>
                                ${product.price}
                            </div>
                            <button className="btn" onClick={ () => deleteProduct(product.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                                <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </button>
                        </li>
                    )
                })
            }
    </ul>
    </>
    )
}
//! We compiled JSX into JS by (babel standalone) Tool
ReactDOM.render(<App/>, document.getElementById('app'))
<!-- Middleware -->

// create a api middleware function
function apikey(req,res,next){
    const api_key = '1234567';
   // console.log(req.body)
   console.log(req.query)
   if(req.query.api_key && (req.query.api_key === api_key)){
    next()
   }else{
    res.json({Warning_message : 'Not allowed'})
   }
   //* Send point to next middelware or route
//    next();
}
// { api_key: '1234567' }
// { api_key: '1234567kjsdhfgjkhdr9g87w6eyriutghsdfugksydhf kgj' }


module.exports = apikey
 
 
## Error handing in express js
```javascript
const Errorhandler = require('./errors/Errorhandler')
// 404 error
app.use((req,res,next) => {
    return (
        //res.json({message : 'Page not found!'})
        res.render('error')
    )
})
// middleware expres for error handling
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
    // res.json({message:err.message})
    // next()
})
```
