import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import Home from "./components/HomePage";
import Product from "./components/ProductPage";
import Services from "./components/ServicesPage";
import AboutUs from "./components/AboutUsPage";
import ContactUs from "./components/ContactUsPage";
import Quote from "./components/QuotePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/get-quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
