import React from 'react'
import './Cod.css'

const CashOnDelivery = () => {


  const handleSubmit = () => {

  }

  return (
    <section className="details">

      <form
        action="" onSubmit={handleSubmit}>
        <div className='form__content'>
          <label htmlFor="" className='form_titles'>  Name</label>

          <input
            type="text"
            name='name'
            placeholder='Enter Name'
          />
        </div>


        <div className='form__content'>
          <label htmlFor="" className='form_titles'>email</label>
          <input
            type="text"
            name='email'
            placeholder='Email'
          />
        </div>


        <div className='form__content'>
          <label htmlFor="" className='form_titles'>Address</label>
          <input
            type="text"
            name='address'
            placeholder='Adress'
          /> </div>

        <div className='form__content'>
          <label htmlFor="" className='form_titles'>Phone Number</label>
          <input
            type="text"
            name='ph'
            placeholder='Ph No'
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