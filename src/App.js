import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";

import { LanguageProvider, useLanguage } from "./context/LanguageContext.js";
import i18n from "./i18n"; // Import i18next config
import { useTranslation } from "react-i18next";

import "./App.css";
import Home from "./components/HomePage";
import Product from "./components/ProductPage";
import Services from "./components/ServicesPage";
import AboutUs from "./components/AboutUsPage";
import ContactUs from "./components/ContactUsPage";
import Quote from "./components/QuotePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MdKeyboardArrowRight } from "react-icons/md";

const theme = createTheme();

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsPopupOpen(true);
    }
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    localStorage.setItem("hasSeenPopup", "true");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPopupOpen(false);
    localStorage.setItem("hasSeenPopup", "true");
  };

  return (
    <Router>
        <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/get-quote' element={<Quote />} />
        </Routes>
        <Footer />
        <Modal
          open={isPopupOpen}
          onClose={handleClosePopup}
          aria-labelledby='popup-form-title'
          aria-describedby='popup-form-description'
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              maxWidth: "30rem",
              bgcolor: "#F2FDF5",
              boxShadow: 24,
              borderRadius: "20px",
              p: 4,
              // margin:'1rem'
            }}
          >
            <Typography
              id='popup-form-title'
              variant='h6'
              sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
            >
              Stay Connected
            </Typography>
            <Typography
              id='popup-form-description'
              variant='body2'
              sx={{ mb: 3, textAlign: "center" }}
            >
              Enter your phone number and email to stay updated with the latest
              news!
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label='Phone Number'
                type='tel'
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <TextField
                label='Email Address'
                type='email'
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  onClick={handleClosePopup}
                  sx={{ mr: 2, textTransform: "none" }}
                >
                  Close
                </Button>
                {/* <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                >
                  Submit
                </Button> */}
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: "#80ED99",
                    width: "8rem",
                    // margin: "auto",
                    color: "#000000",
                    fontWeight: "700",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#6CCD85",
                    },
                  }}
                >
                  Submit <MdKeyboardArrowRight />
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
      </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
