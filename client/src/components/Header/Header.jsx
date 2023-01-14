import AiOutlineShoppingCart from 'react-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { BsBagX } from "react-icons/bs";
import { Category } from '../product_cate';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = (props) => {
    // state for the categories 
    const [Categories, setCategories] = useState([])
    // fetching the categories from server on 
    useEffect(() => {
        setCategories(Category)
        // console.log(props)

    }, [])

    // getting item from store
    const cart_items = useSelector(state => state.cart)
    const item_in_the_cart = cart_items.length
    // getting item from store

    return (

        <nav className='nav'>
            <section className='header_container'>
                {/* logo in the header section */}

                <section className="logo">
                    <Link to='/' className='homeLink'>   <h1>Shopping <span>Hub.</span></h1></Link>
                </section>
                {/* search bar in the header section */}

                <section className="search">
                    <input
                        placeholder='Search Products...'
                        type="text" />
                    {/* <FcSearch/> */}
                </section>
                {/* cart in the header section */}
                <section className="cart">
                    cart
                    <span className="carticon">
                        <span className='numshow'>{item_in_the_cart}</span>
                        <Link to='/cart'>
                            <BsBagX /></Link>

                    </span>
                </section>

            </section>


            <section className="navigationlink">

                {
                    Categories.map((category, id) => {

                        return <Link key={id} to={`/products/${category.category_name}`}
                            onClick={() => props.clickedOnLink(Math.floor(Math.random() * 100))}>{category.category_name}</Link>
                    })
                }

            </section>
        </nav>
    )
}

export default Header