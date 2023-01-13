import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'; import { HiOutlineTrash } from "react-icons/hi";
import { FcApproval, FcPrevious, FcLock } from "react-icons/fc";

const Cart = () => {
    return (
        <>
          
            <Link to='/' className='back_btn'><FcPrevious/></Link>
            <h4>My Cart 
                <FcLock/>
            </h4>
            <section className="cart_container">

                <div className="cart_box">
                    <section className="left_cart_container">
                        <span className='delete_icon'>  <HiOutlineTrash /></span>
                        <section className="cart_product_img">
                            <img src="https://cms-wp.bigcommerce.com/wp-content/uploads/2017/05/product-photography-hero-1.jpg" alt="" />

                        </section>
                        <section className="cart_inc_dec">
                            <strong>Product Name</strong>
                            <span className='qty_button'> QTY:  <button>+</button> 1 <button>-</button></span>
                            <span>Price Rs.100</span>
                        </section>

                        <section className="sub_total">
                            SubTotal Rs.100
                        </section>

                    </section>


                </div>

                <section className="right_cart_container">

                    <section className="card_total">
                        <h3>Order Summary</h3>
                        <hr />
                    </section>
                    <section className="order_details">
                        <b className="first">     <span>Selcted 1 Item Price</span> <span>Rs. 0000</span></b>

                        <b className="first">     <span>Discount</span> <span>Rs. 0000</span></b>

                        <b className="first">     <span>Delivery Charge</span> <span>Rs. 0000</span></b>
                    </section>
                    <section className="total">
                        <h5>Grand Total</h5> <span>Rs.100000</span>
                    </section>
                    <button className='procced_button'>Proceed To Payment <FcApproval /></button>
            </section>

        </section>
        </>
    )
}

export default Cart