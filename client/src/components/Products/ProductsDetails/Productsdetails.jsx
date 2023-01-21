import React from 'react'
import { useEffect } from 'react'
import { add } from "../../../redux/cartSlice";
import { useDispatch } from 'react-redux'
import "./ProductsDetails.css"
import Products from '../../Products/Product'
import { useState } from 'react'

const Productsdetails = () => {

  // dispatch for the store
  const dispatch = useDispatch()

  // state for the product
  const [product, setProduct] = useState({img:''})

  // getting the product from server based on id
  useEffect(() => {
    // getting the id from url
    // extracting the id from url so that to fetch product
    const location = window.location.pathname
    // console.log(location)
    const path = location.split('/')
    const urlId = path[path.length - 1]
    // console.log(Products)
    const product = Products.filter((item, id) => {
      return item.id == urlId
    })
    console.log(product)
    setProduct(product[0])
  }, [])
  function ADD_TOCART() {
    // ading to the cart 
    dispatch(add(product))
    console.log(product)
  }
  // add to cart when click in cart


  return (
    <>

      <div className="card-wrapper">
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={product.img} alt="" />

              </div>
            </div>
          </div>

          <div className="product-content">
            <h2 className="product-title"> {product.name}</h2>
            <a href="#" className="product-link">{product.category}</a>
            <div className="product-price">

              <p className="new-price">Buy. @ price <span>Rs {product.price}</span></p>
            </div>
            <div className="product-detail">
              <h2>About this item</h2>
              <p>{product.desc}</p>
              <ul className="productVis">
                <li>Availability: <span>Available</span></li>
                <li>Shipping Area: <span>One inside Mahendranagar</span></li>
                <li>Shipping Fee: <span>Free</span></li>
              </ul>
            </div>
            <div className="purchase-info">
              <input type="number" min="1" max="1" value="1" />
              <button type="button" className="btn" onClick={ADD_TOCART}>
                Add To Cart <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </>


  )
}

export default Productsdetails
