import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import Icon from "../assets/icon.png";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav className={scrolled ? "navbar navbar-scrolled" : "navbar"}>
    //   <div className="navbar-container">
    //     <Link to="/" ><img className="navbar-logo" src={Icon} alt="heliomaax"/></Link>
    //     <div className="navbar-links">
    //       <Link to="/">Home</Link>
    //       <Link to="/products">Products</Link>
    //       <Link to="/services">Services</Link>
    //       <Link to="/about-us">About Us</Link>
    //       <Link to="/contact-us">Contact Us</Link>
    //       <Link to="/get-quote">Get Quote</Link>
    //     </div>
    //   </div>
    // </nav>
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "#22577A" : "transparent",
        boxShadow: isScrolled ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "25%" }}>
          <img
            src={Icon}
            alt="Logo"
            style={{ maxWidth: "15rem", maxHeight: "50px" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "30%",
            justifyContent: "space-between",
            //   flexGrow: 1,
            marginLeft: "16px",
          }}
        >
          <Typography
            variant="body1"
            component="a"
            href="/"
            sx={styles.link}
          >
            Home
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="products"
            sx={styles.link}
          >
            Product
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="services"
            sx={styles.link}
          >
            Services
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="about-us"
            sx={styles.link}
          >
            About Us
          </Typography>

          <Typography
            variant="body1"
            component="a"
            href="contact-us"
            sx={styles.link}
          >
            Contact Us
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "15%",
            justifyContent: "space-between",
            //   flexGrow: 1,
            marginLeft: "16px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#80ED99",
              color: "#000000",
              fontWeight:'700',
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#6CCD85",
              },
            }}
            onSubmit={()=>{}}
            href="/get-quote"
          >
            Get Quote
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.2rem",
    margin: "0 10px",
  },
};

export default Navbar;
