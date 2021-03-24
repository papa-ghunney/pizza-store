

import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Hero from "./HeroSection/Hero";
import Products from './Products/Products';
import { productData, productDataTwo } from './Products/Data';
import Feature from './Feature/Feature';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading='Choose your favourite' data={productData} />
        <Feature />
        <Products heading='Sweet Treats for You' data={productDataTwo} />
        <Footer />
      </Router>

    </>
  )
}

export default App
