import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    const cartstyle = {
        background : "black",
        display : "flex",
        padding : "6px 12px",
        borderRadius : "18px"
    }
  return (
    <>
       <nav className='container mx-auto flex items-center justify-between py-2'>
            <Link to='/'>
                <img className='rounded-full' style={{height: 50}} src='/images/logo.png' alt='logo'></img>
            </Link>

            <ul className='flex items-center'>
                <li className='ml-6'><Link to='/'>Home</Link></li>
                <li className='ml-6'><Link to='/products'>Products</Link></li>
                <li className='ml-6'>
                    <Link to='/cart'>
                        <div style={cartstyle}>
                            <span className='text-white'>10</span>
                            <img className= 'ml-2' style={{height:30}} src='https://cdn-icons-png.flaticon.com/512/3081/3081840.png' alt='cart'></img>
                        </div>
                    </Link>
                </li>

            </ul>
       </nav>

    </>
  )
}

export default Navigation