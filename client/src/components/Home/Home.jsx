import React from 'react'
import Header from '../Header/Header'
import Hero from '../HeroSection/Hero'
import './Home.css'
import { Categories } from './Categories/Categories'
import OfferSection from './Offers/OfferSection'
import Products from './Products/Products'

const Home = () => {
    return (
        <section className='home_container'>

            <section>
                <Hero />
            </section>
            <section className="categories">
                <Categories />
            </section>
            <section
                className='offers'>
                <OfferSection/>
            </section>
            <section className="products">
                <Products/>
            </section>
        </section>
    )
}

export default Home