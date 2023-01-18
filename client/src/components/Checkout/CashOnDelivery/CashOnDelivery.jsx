import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import './Cod.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const CashOnDelivery = () => {

  // getting the data from redux store
  const cart_item = useSelector(state => state.cart)

  const navigate = useNavigate()
  // state of input in the fiels
  const [input, setInput] = useState({})

  // handling input in the form
  const handleInput = (e) => {

    const name = e.target.name
    const value = e.target.value
    setInput({ ...input, [name]: value })

  }


  // handling submit of the form
  const handleSubmit = async (e) => {
    e.preventDefault()

    // checking the form input
    if (!(input.name && input.email && input.phone && input.address)) {
      toast.error('Enter the details...')
    }
    else if (input.address.length < 6) {
      toast.warn('Enter Proper Address...')
    }
    else if ((input.name.length < 4)) {
      toast.warn('Please enter Full Name')
    }
    else if (input.phone.length != 10) {
      toast.error('Enter Correct Phone Number...')
    }


    // sending data to the server with order details

    else {
      await axios.post('/api/order', { orderDetails: cart_item, user: input }).then((Response) => {
        console.log(Response.data.success)
        if (Response.data.success) {
          navigate('/order-success')
        }
      }).then(eror => {
        console.log(eror)
      })
    }


  }
  // storing order details in an obj
  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <section className="details">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className='form__content'>
          <label htmlFor="" className='form_titles'>  Name</label>

          <input
            type="text"
            name='name'
            placeholder='Enter Name'
            onChange={handleInput}
            value={input.name || ''}
          />
        </div>


        <div className='form__content'>
          <label htmlFor="" className='form_titles'>email</label>
          <input
            type="text"
            onChange={handleInput}
            name='email'
            value={input.email || ''}
            placeholder='Email'
          />
        </div>


        <div className='form__content'>
          <label htmlFor="" className='form_titles'>Address</label>
          <input
            type="text"
            onChange={handleInput}
            value={input.address || ''}
            name='address'
            placeholder='Adress'
          /> </div>

        <div className='form__content'>
          <label htmlFor="" className='form_titles'>Phone Number</label>
          <input
            type="text"
            name='phone'
            placeholder='Phone Number'
            onChange={handleInput}
            value={input.phone || ''}
          />
        </div>
        <div className="form__content">
          <input
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
            type="submit"
            className='payment_submit_button'
            value="Confirm Payment"
          />
        </div>
      </form>
    </section>
  )
}

export default CashOnDelivery