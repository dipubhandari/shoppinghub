import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'; import { HiOutlineTrash } from "react-icons/hi";
import { FcApproval, FcPrevious, FcLock } from "react-icons/fc";
import { useSelector } from 'react-redux';
import { remove } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Cart = () => {

    // getting item from store
    let cart_item = useSelector(state => state.cart)
    const [cart_items, setCartItem] = useState(cart_item)
    const item_in_the_cart = cart_items.length
    // getting item from store


    // handling the qty update while user update the qty
    const UPDATEQTY = (event, id) => {
        const product_id = id
        if (event == 'INCREAMENT') {
            const products = cart_items.map((item, id) => {
                if (item.id == product_id) {
                    return { ...item, qty: item.qty + 1 }
                }
                return item
            })
            setCartItem(products)

        }

        if (event == 'DECREAMENT') {
            const products = cart_items.map((item, id) => {
                if (item.id == product_id) {
                    return { ...item, qty: (item.qty = 1) ? 1 : item.qty - 1 }
                }
                return item
            })
            setCartItem(products)

        }

    }
    // handling the qty update while user update the qty


    // calculating the price of cart products

    //    state for the total price of the item 
    const [totalPrice, setTotalPrice] = useState('')
    useEffect(() => {

        let total = 0
        cart_items.forEach(item => {
            total += (item.qty * item.price)
        })
        setTotalPrice(total)
    }, [cart_items, UPDATEQTY])

    // calculating the price of cart products 


    //remove item from redux store  
    const dispatch = useDispatch()
    const REMOVE_TO_CART = (product) => {
        // console.log(product)
        dispatch(remove(product))
    }
    // remove item from redux store  

    return (
        <>

            <Link to='/' className='back_btn'><FcPrevious /></Link>
            <h4>My Cart
                <FcLock />
            </h4>
            <section className="cart_container">

                <div className="cart_box">
                    {
                        cart_items.map((item, id) => {
                            return <section className="left_cart_container" key={id}>
                                <span className='delete_icon' onClick={() => REMOVE_TO_CART(item)}>  <HiOutlineTrash /></span>
                                <section className="cart_product_img">
                                    <img src={item.img} alt="" />

                                </section>
                                <section className="cart_inc_dec">
                                    <strong>{item.name}</strong>
                                    <span className='qty_button'> QTY:  <button onClick={() => UPDATEQTY('INCREAMENT', item.id)}>+</button> {item.qty} <button onClick={() => UPDATEQTY('DECREAMENT', item.id)}>-</button></span>
                                    <span>Price Rs.{item.price}</span>
                                </section>

                                <section className="sub_total">
                                    SubTotal Rs.{item.qty * item.price}
                                </section>

                            </section>

                        })
                    }

                </div>

                <section className="right_cart_container">

                    <section className="card_total">
                        <h3>Order Summary</h3>
                        <hr />
                    </section>
                    <section className="order_details">
                        <b className="first">     <span>Selcted {cart_items.length} Item Price</span> <span>Rs. 0000</span></b>

                        <b className="first">     <span>Discount</span> <span>Rs. 0000</span></b>

                        <b className="first">     <span>Delivery Charge</span> <span>Rs. 0000</span></b>
                    </section>
                    <section className="total">
                        <h5>Grand Total</h5> <span>Rs.{totalPrice}</span>
                    </section>
                    <button className='procced_button'>Proceed To Payment <FcApproval /></button>
                </section>

            </section>
        </>
    )
}

export default Cart