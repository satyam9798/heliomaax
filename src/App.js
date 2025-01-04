import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';

import './App.css';
import Home from "./components/HomePage";
import Product from "./components/ProductPage";
import Services from "./components/ServicesPage";
import AboutUs from "./components/AboutUsPage";
import ContactUs from "./components/ContactUsPage";
import Quote from "./components/QuotePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const theme = createTheme();

function App() {
  return (
    <Router>
       <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/get-quote" element={<Quote />} />
      </Routes>
      <Footer/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
