import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AiOutlineShoppingCart from 'react-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { BsBagX } from "react-icons/bs";
import { Category } from '../product_cate';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { GoSignOut } from "react-icons/go";

const Header = (props) => {
    // state for the categories 
    const [Categories, setCategories] = useState([])

    // if user clicked in logout btn this functionality

    const logout = () => {
        localStorage.removeItem('shoppinghub')
        toast.info('Log Out!...');

    }

    // if user clicked in logout btn this functionality

    // checking the user is logged in or not
    const [isLogin, setLogin] = useState(false)
    const [loggedUser, setLoggedUser] = useState({})
    useEffect(() => {
        let Check_User_Login = async function () {
            const user = localStorage.getItem('shoppinghub')
            if (user) {
                const Logged_user_detail = JSON.parse(user)
                const check = await axios.post(`/api/check-login`, Logged_user_detail).then(response => {
                    setLogin(response.data.isAuthorized)
                    setLoggedUser(response.data.user)
                })
            }
            else {
                setLogin(false)
            }
        }
        Check_User_Login()
    }, [logout])

    // fetching the categories from server on 
    useEffect(() => {
        setCategories(Category)
    }, [])

    // getting item from store
    const cart_items = useSelector(state => state.cart)
    const item_in_the_cart = cart_items.length
    // getting item from store


    return (

        <nav className='nav'>
            <ToastContainer />
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
                        <Link to='/cart'>
                            <span className='numshow'>{item_in_the_cart}</span>

                            <BsBagX /></Link>

                    </span>

                    {
                        (isLogin) ? <section className='iflogged'> <b> Hello,{loggedUser.name}</b><span onClick={logout}><GoSignOut /></span> </section> : <Link to='/login' className='login_link'>Login/Register</Link>
                    }


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