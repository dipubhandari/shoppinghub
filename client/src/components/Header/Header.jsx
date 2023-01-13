import AiOutlineShoppingCart from 'react-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { BsBagX } from "react-icons/bs";

const Header = () => {
    return (

        <nav className='nav'>
            <section className='header_container'>
                {/* logo in the header section */}

                <section className="logo">
                    <h1>Shopping <span>Hub.</span></h1>
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
                        <span className='numshow'>0</span>
                        <BsBagX />
                    </span>
                </section>

            </section>


            <section className="navigationlink">

                <a href="">Clothes</a>
                <a href="">Electronics</a>
                <a href="">Furnitures</a>
                <a href="">Shoes</a>
                <a href="">Others</a>

            </section>
        </nav>
    )
}

export default Header