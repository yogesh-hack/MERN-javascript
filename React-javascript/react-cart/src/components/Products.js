import { Link } from "react-router-dom";
import ProductList from "./ProductList"
import { useState, useEffect, useContext} from 'react'
import { CartContext } from "../pages/CartContext";

const Products = () => {
  // const { name } = useContext(CartContext);

  const [products,setPoducts] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e3916ec95dmsh9a51089805b9951p1d3e9djsnd403b553e8e6',
      'X-RapidAPI-Host': 'favoritefoodapi.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    fetch('https://favoritefoodapi.p.rapidapi.com/food/api/v1/favorites', options)
      .then(response => response.json())
      .then(products => {
        // console.log(products)
        setPoducts(products)
      })
      .catch(err => console.error(err));
  },[])
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-2xl font-bold py-8">Products}</h1>
      <div className="grid grid-cols-4 my-5 gap-24">
        {
          products.map(product => <ProductList key={product._id} product={product} />)
        }
      </div>
    </div>
  )
}

export default Products