
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from './components/globalStyles';
import Hero from "./components/HeroSection/Hero";
import Products from './components/Products/Products';
import { productData, productDataTwo } from './components/Products/Data';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';

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
