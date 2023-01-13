import { FaCartPlus } from "react-icons/fa";
import React from 'react'
import './RecentProducts.css'

import { ProductsDetails } from './Product'
import { useState } from "react";
import { useEffect } from "react";
const Products = () => {
  // state for products coming from server
  const [Products, setProducts] = useState([])

  // loading the products to the products state on rendering
  useEffect(() => {
    setProducts(ProductsDetails)
  }, [])
  return (
    <section className='product_container'>
      <h1>Products</h1>
      <section className="product_card">
{/* Displyaing product from products state */}
        {

          Products.map((product,index) => {
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
                <section className="add_to_cart">
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