import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Products from './components/Home/Products/Products'
import Header from './components/Header/Header'

const App = () => {
  return (
    <BrowserRouter>
<Header/>
      <section>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products/:categoryname' element={<Products />}></Route>
          {/* <Home /> */}

    </Routes>

      </section>
    </BrowserRouter>

  )
}

export default App