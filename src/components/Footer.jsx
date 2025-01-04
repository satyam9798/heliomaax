import React from "react";
import { Grid, Typography, Link, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#22577A", color: "white", padding: "40px 0"}}>
      <Grid container spacing={4} justifyContent="space-between" sx={{margin:'auto'}}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
            Company
          </Typography>
          <ul style={{ padding: 0, listStyle: "none" }}>
            <li>
              <Link href="#" color="inherit" underline="none">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Get Quote
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
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
              <Link href="#" color="inherit" underline="none">
                Product
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Goverment Schemes
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Bank Finance
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Products
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
            <IconButton href="#" target="_blank" sx={{ color: "white", marginRight: "10px" }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" target="_blank" sx={{ color: "white", marginRight: "10px" }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" target="_blank" sx={{ color: "white", marginRight: "10px" }}>
              <Instagram />
            </IconButton>
            <IconButton href="#" target="_blank" sx={{ color: "white", marginRight: "10px" }}>
              <LinkedIn />
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
