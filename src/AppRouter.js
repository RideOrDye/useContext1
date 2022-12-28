import React from 'react'
import HomePage from './components/Homepage/HomePage'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
// import Careers from './components/Careers'
// import Events from './components/Events'
// import Products from './components/Products'
// import Support from './components/Support'



const AppRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="careers" element={<Careers/>}/> */}
      {/* <Route path="events" element={<Events/>}/> */}
      {/* <Route path="products" element={<Products/>}/> */}
      {/* <Route path="support" element={<Support/>}/> */}

    </Routes>

  )

}

export default AppRouter;