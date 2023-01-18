import React from 'react'
import './ThankYou.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


const ThankYou = (props) => {


    // setting the value of islogin page false so that header appears
    useEffect(() => {
        props.isAccountPage(false)
    }, [])

    return (
        <>
            {/* <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thank-you-for-your-purchase-postcard-design-template-25f6a9b0364eb7e9a221f4178be4c082_screen.jpg?ts=1605968932"
                alt="" /> */}
            <section className="thankyou__ontainer">
                <h1>Thank You.. Your Order is on the way we will contact soon...</h1>
                <Link to='/' className='buyanotherlink'>Buy Again...</Link>
                Your Order Id Is sh_hub
                {Math.floor(Math.random() * 100)}
            </section>
        </>
    )
}

export default ThankYou