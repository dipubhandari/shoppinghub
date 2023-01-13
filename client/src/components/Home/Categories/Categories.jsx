import React from 'react'
import './Categories.css'
export const Categories = () => {
    return (
        <section className="categoriescontainer">
            <h2>Category</h2>
            <section className="categories_rows">
                <section className="categories_item">
                    <img
                        src='https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?w=2000'
                        className='categories_img'
                        alt="loading" />
                    <h3>Beauty</h3>
                </section>

                <section className="categories_item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oa4O4ZAFxuie_dDGL70ebWxM959-ZRvpIUjr11PDi70oOi3i78UpFx4-QyEYO_ucLAg&usqp=CAU"
                        className='categories_img' alt="loading" />
                    <h3>Healthy</h3>
                </section>

                <section className="categories_item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLmvlzhBypHhOqCGSGjj0z8wIPfPfft6jGA&usqp=CAU"
                        className='categories_img' alt="loading" />
                    <h3>Camera</h3>
                </section>
                <section className="categories_item">
                    <img src="https://www.computerhope.com/jargon/d/device.jpg"
                        className='categories_img' alt="loading" />
                    <h3>Devies</h3>
                </section>
                <section className="categories_item">
                    <img src="https://www.pngitem.com/pimgs/m/136-1369939_transparent-blue-aesthetic-png-blue-aesthetic-clothes-transparent.png"
                        className='categories_img' alt="loading" />
                    <h3>Clothes</h3>
                </section>
            </section>
        </section>
    )
}
