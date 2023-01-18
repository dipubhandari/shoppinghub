import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import CashOnDelivery from './CashOnDelivery/CashOnDelivery'
import './Checkout.css'; import { HiOutlineTrash } from "react-icons/hi";
import { FcApproval, FcPrevious, FcCheckmark, FcLock, FcMoneyTransfer } from "react-icons/fc";
import Payment from './PayNow/Payment'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {

    // items in the cart
    const cartItem = useSelector(state => state.cart)

    const navigate = useNavigate()
    // state for tracking the selected payment method if cod selected show cod component if pay now selected show    now pay
    const [selected_payment_method, setselected_payment_method] = useState('cash-on-delivery')

    // method of handling the user payment selected method
    const handleInput = (e) => {

        //    setting the payment method on stte
        setselected_payment_method(e.target.value)


    }

    // calculating the total price in the cart
    let [total_price, setTotalPrice] = useState('')
    useEffect(() => {
        let r = 0
        cartItem.map((data) => {
            r += data.qty * data.price
        })
        setTotalPrice(r)
// navigating the user to cart if there is no item in cart
        if (cartItem.length < 1) {
            navigate("/cart")
        }
    }, [])


    return (
        <>

            <Link to='/' className='back_btn'><FcPrevious /></Link>
            <h4>Select Payment Method
                <FcCheckmark />
            </h4>

            <h4 className='select_payment'>


                <form>
                    <input
                        onClick={handleInput}
                        type="radio"
                        name='payment_method'
                        value='cash-on-delivery' />
                    <label htmlFor="">cash-on-delivery</label>
                    <FcMoneyTransfer />

                    <input
                        onClick={handleInput}
                        type="radio"
                        name='payment_method'
                        value='paynow'
                    />
                    E-sewa/Paypal/Khalti <img
                        style={{ width: '100px', height: '100px', display: 'inline', }} src="https://ictframe.com/wp-content/uploads/Khalti-Logo.png"
                        alt="" />
                    <img
                        style={{ width: '100px', height: '100px', display: 'inline', }} src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png"
                        alt="" />
                    <img
                        style={{ width: '100px', height: '100px', display: 'inline', }} src="https://english.onlinekhabar.com/wp-content/uploads/2020/09/eSewa.jpg"
                        alt="" />
                </form></h4>

            < section className="cart_container">
                {
                    // if type of payment method selected
                    // then show cod else show pay
                    (selected_payment_method == 'cash-on-delivery')
                        ?
                        <div className="cart_box">
                            <CashOnDelivery />
                        </div>
                        :

                        <div className="cart_box">
                            <Payment />
                        </div>
                }

                <section className="right_cart_container">

                    <section className="card_total">
                        <h3>Order Summary</h3>
                        <hr />
                    </section>
                    <section className="order_details">
                        <b className="first">     <span>You Are Buying </span> <span> {cartItem.length} items</span></b>


                    </section>
                    <section className="total">
                        <h5>Grand Total</h5> <span>Rs.{total_price}</span>
                    </section></section>

            </section>
        </>
    )
}

export default Checkout