import React from 'react'
import './NoItemInCart.css'
import { Link } from 'react-router-dom'
const NoItemInCart = () => {
    return (
        <>

            <h1 className='noitemstopic'>No items In the cart.
                <Link to='/' className='link_buy'>Buy Now</Link>
            </h1>
        </>
    )
}

export default NoItemInCart