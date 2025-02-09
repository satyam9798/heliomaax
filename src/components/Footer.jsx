import React from "react";
import { Grid, Typography, Link, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate= useNavigate();
  return (
    <Box sx={{ backgroundColor: "#22577A", color: "white", padding: "40px 0", zIndex: 1,maxWidth:'100vw',overflowX:'hidden' }}>

      <Grid container spacing={4} justifyContent="space-between" sx={{margin:'auto'}}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
            Company
          </Typography>
          <ul style={{ padding: 0, listStyle: "none" }}>
            <li>
              <Link onClick={() => navigate("/about-us")} color="inherit" underline="none">
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={() => navigate("/contact-us")} color="inherit" underline="none">
                Contact Us
              </Link>
            </li>
            <li>
              <Link onClick={() => navigate("/get-quote")}  color="inherit" underline="none">
                Get Quote
              </Link>
            </li>
            <li>
              <Link onClick={() => navigate("/services")}  color="inherit" underline="none">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={() => navigate("/products")} color="inherit" underline="none">
                Product
              </Link>
            </li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
            Product and Services
          </Typography>
          <ul style={{ padding: 0, listStyle: "none" }}>
            <li>
              <Link onClick={() => navigate("/products")} color="inherit" underline="none">
                Products
              </Link>
            </li>
            <li>
              <Link onClick={() => navigate("/services")}  color="inherit" underline="none">
                Goverment Schemes
              </Link>
            </li>
            <li>
              <Link onClick={() => navigate("/services")}  color="inherit" underline="none">
                Bank Finance
              </Link>
            </li>
            <li>
              <Link onClick={() => navigate("/services")}  color="inherit" underline="none">
                Services
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Third Column: Social Media Icons */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
            Connect with Us
          </Typography>
          <Box>
            <IconButton href="https://www.facebook.com/share/p/15cw5kYzPT/?mibextid=wwXIfr" target="_blank" sx={{ color: "white", marginRight: "10px" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://x.com/heliomaax?s=11" target="_blank" sx={{ color: "white", marginRight: "10px" }}>
              <Twitter />
            </IconButton>
            <IconButton href="https://www.instagram.com/heliomaax?igsh=MW1wZ2o3eWw3NXptZA%3D%3D&utm_source=qr" target="_blank" sx={{ color: "white", marginRight: "10px" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://youtube.com/@heliomaax?si=FXgFGLwHt0XSHTYt" target="_blank" sx={{ color: "white", marginRight: "10px" }}>
              <BsYoutube />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Text */}
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Heliomaax. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
