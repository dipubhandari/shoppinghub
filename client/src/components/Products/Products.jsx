import { FaCartPlus } from "react-icons/fa";
import React from 'react'
import './Products.css'
import { ProductsDetails } from './Product'
import { useState } from "react";
import { useEffect } from "react"
import { add } from "../../redux/cartSlice";
import { useDispatch } from 'react-redux'

const Products = (props) => {
  // state for products coming from server
  const [Product, setProducts] = useState([])
  // state for rerendering the components while clicking on the categories

  // state for categories name
  const [category, setCategoryName] = useState('')

  // render component while clicked on link 
  useEffect(() => {
    // getting the cat from url
    const location = window.location.pathname
    // console.log(location)
    const path = location.split('/')
    const category_name = path[path.length - 1]
    setCategoryName(category_name)
    //loading the products to the products state on rendering
    //  filtering the products based on categories from url http://ex/products/:category
    const Products = ProductsDetails.filter((item, e) => {
      return item.category == category_name
    })
    setProducts(Products)

  }, [props.clickedOnNavigation])


  // SENDING data to store on click on cart
  const dispatch = useDispatch()
  const ADD_TO_CART = (PRODUCT) => {
    dispatch(add(PRODUCT))
  }
  // here
  return (
    <section className='recent_product_container'>
      HOME - PRODUCTS - CATEGORIES -
      {category}
      <h1>Products</h1>
      <section className="product_card">
        {/* Displyaing product from products state */}
        {

          Product.map((product, index) => {
            return <section className='product_box' key={index}>
              <span className="product_categories">
                {/* showing the category of the item */}
                {product.category}
              </span>
              <section className="product_image">
                <img src={product.img} alt="" />
              </section>
              <section className="product_name">
                <h3> {product.name}</h3>
              </section>
              <section className="product_details">
                <section className="product_price">
                  Rs. {product.price}
                </section>
                <section className="add_to_cart" onClick={() => { ADD_TO_CART(product) }}>
                  <FaCartPlus />
                </section>
              </section>
            </section>

          })
        }
        {/* Displyaing product from products state till here*/}

        {/* first  */}

      </section>
    </section>
  )
}

export default Products