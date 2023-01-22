import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './components/Navigation'
import Products from './pages/Products'
import { CartContext } from './pages/CartContext'
import { useState,useEffect } from 'react'
function App() {
const {cart, setCart}  = useState([]);

useEffect(() => {
  const cart = window.localStorage.getItem('cart');
}, [])


    return (
        <>
            <Router>
                <CartContext.Provider>
                    <Navigation/>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/products' exact element={<Products/>} />
                    </Routes>
                </CartContext.Provider>
            </Router>
        </>
        )
}
export default App