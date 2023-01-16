import React, { useState } from 'react'
import { useEffect } from 'react'
import { Category } from '../../product_cate'
import './Categories.css'
import { Link } from "react-router-dom";

export const Categories = () => {

    // state for categorires
    const [categories,setCategories] = useState([])

    // setting the categories fetch from the server
    useEffect(() => {
       setCategories(Category) 
    },[])
    // setting the categories fetch from the server  till here
   
    return (
        <section className="categoriescontainer">
            <h2>Category</h2>
            <section className="categories_rows">

                    {
                        categories.map((category, index) => {
                            return <Link key={ index} to={`/products/${category.category_name}`} className="categories_link">
                                <section className="categories_item" key={index}>

                                    <img
                                        src={category.img}
                                        className='categories_img'
                                        alt="loading" />
                                    <h3>{category.category_name}</h3>
                                </section>
                            </Link>
                        })
                    }
                   
      
</section>
        </section>
    )
}
