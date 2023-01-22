import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
  console.log(props)
  const {product} = props
  return (
    <div className='px-2 py-2 bg-white rounded-xl'>
        <img src={product.imageUrl} alt="list"></img>
        <div className="text-center">
            <h2 className="text-lg font-bold py-2">{product.favoriteDish}</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Only {product.platesAvailable} plates Left</span>
        </div>
        <div className="flex justify-between items-center mt-4">
            <span>₹{product.price}</span>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Add</button>
        </div>
    </div>
  )
}

export default ProductList