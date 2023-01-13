import React, { useState } from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Products from './components/Products/Products'

const App = () => {



  // state for rerendering the product component while clicked on link
  const [clickedOnNavigation,setClickedOnNavigation] = useState('')
  const clickedOnLink = (random) => {
    setClickedOnNavigation(random)
  }
  // state for rerendering the product component while clicked on link


  return (
    <BrowserRouter>
      <Header clickedOnLink={clickedOnLink} />
      <section>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products/:categoryname' element={<Products clickedOnNavigation={clickedOnNavigation} />}></Route>
          {/* <Home /> */}

        </Routes>

      </section>
    </BrowserRouter>

  )
}

export default App