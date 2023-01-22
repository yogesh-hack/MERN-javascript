# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



main file index.js in src for routing all files or folder

App.js is main react components to show web page

index.css -> global css file

## recatDOM -> method render

ReactDOM.render(
    <h1>this is rendering file</h1>, // this is not html, its JSX
    document.getElementById('root')
)

## create components App.js

function App() {
    return (<h1>This is components in App.js</h1>)
}
export default App

## /index.js
import App from './App'

ReactDOM.render(
    <App/>, // Component
    document.getElementById('root')
)

## create multiple tags in App.js
function App() {
    return (
        <h1>This is components in App.js</h1>
        <div>Second / multple tags</div>
        )
}
export default App

### react hav not allow to mutiple tags so we create a single tag use <></>
```js
function App() {
    return (
        <>
            <h1>This is components in App.js</h1>
            <div>Second / multple tags</div>
        </>
        )
}
export default App
```
### Also use arrow function as
```js
const App => () {
    return (
        <>
            <h1>This is components in App.js</h1>
            <div>Second / multple tags</div>
        </>
        )
}
export default App
```
## /src/index.css
- css styling globally used
```css
body{
    background:green;
}
```

### import this csss file to all react components
##### /index.js
```js
import './index.css'
import App from './App'

ReactDOM.render(
    <App/>, // Component
    document.getElementById('root')
)
```

# Why we use React
- complex application
- many routing
- diffrent pages
**work as one page appliction but use many pages**

## How to work with multiple pages

install - **react-router-dom**
`npm install react-router-dom`


```js
import { } from 'react-router-dom'

function App() {
    return (
        <>
            <h1>This is components in App.js</h1>
            <div>Second / multple tags</div>
        </>
        )
}
export default App
```

<Route props></Route>
- fucntion me parameter same as component me props 

## why we use Routes
'/' => Render home page
'/About' => '/' -> render home pages and 'about' -> render about pages


 {/* craete a link */}
<a href='/'>Home</a>
<a href='/about'>About</a>

### it create one page applicaiton without refreshing the page
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>

```js
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
function App() {
    return (
        <>
            <Router>
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>

                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                </Routes>
            </Router>
        </>
        )
}
export default App
```

## Navigation.js
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

    </>
  )
}

export default Navigation

## App.js
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './components/Navigation'
function App() {
    return (
        <>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                </Routes>
            </Router>
        </>
        )
}
export default App

# Project start

### play with tailwind cdn

/public/index.html
<script src="https://cdn.tailwindcss.com"></script>

# React Hook
- its not own states so react have many hooks
## useState()
const [ data, refrence function] = useState(default/initial value)
```js
import { useState } from 'react'

    const [products,setPoducts] = useState([]);
```
- in js, called destructuring assignments
- when chaanges in data, it reredered with new data using usestate();

## useEffect()
- it is used what data should be changed 
```js
useEffect(() => {

  },[dependency array])
```
- if dependency array change, then run arrow fucntion

## props by fetch api
import React from 'react'

<img src="https://img.freepik.com/free-photo/cocktail-mini-triangle-samosa-made-using-patti-strip-popular-home-made-snack-from-india_466689-90745.jpg?size=626&ext=jpg&ga=GA1.2.1657290272.1674280175&semt=sph" alt="list"></img>
```js
const ProductList = (props) => {
  console.log(props)
  return (
    <div className=' px-4 py-4 bg-white'>
        <img src="https://img.freepik.com/free-photo/cocktail-mini-triangle-samosa-made-using-patti-strip-popular-home-made-snack-from-india_466689-90745.jpg?size=626&ext=jpg&ga=GA1.2.1657290272.1674280175&semt=sph" alt="list"></img>
        <div className="text-center">
            <h2 className="text-lg font-bold py-2">Indian Samosa</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
        </div>
        <div className="flex justify-between items-center mt-4">
            <span>₹ 50</span>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Add</button>
        </div>
    </div>
  )
}

export default ProductList
```
