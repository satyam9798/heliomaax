import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";

import { useLanguage } from "../context/LanguageContext.js";
import { Logo } from "../constants/images.js";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const {t }= useTranslation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = (lang) => {
    if (lang) {
      changeLanguage(lang);
    }
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
    console.log(language)
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: isScrolled ? "white" : "transparent",
        boxShadow: isScrolled ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: isMobile ? "50%" : "25%" , ml: '3rem' }} component='a' onClick={() => navigate("/")} >
          <img
            src={Logo}
            alt='Logo'
            style={{ maxWidth: isMobile ? "6rem" : "15rem", maxHeight: "50px"}}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            flexGrow: 1,
            marginLeft: "16px",
          }}
        >
          <Typography
            variant='body1'
            component='a'
            onClick={() => navigate("/")}
            sx={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.2rem",
              margin: "0 10px",
              color: !isScrolled ? "white" : "#22577A",
            }}
          >
            Home
          </Typography>
          <Typography
            variant='body1'
            component='a'
            onClick={() => navigate("/products")}
            sx={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.2rem",
              margin: "0 10px",
              color: !isScrolled ? "white" : "#22577A",
            }}
          >
            Product
          </Typography>
          <Typography
            variant='body1'
            component='a'
            onClick={() => navigate("/services")}
            sx={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.2rem",
              margin: "0 10px",
              color: !isScrolled ? "white" : "#22577A",
            }}
          >
            Services
          </Typography>
          <Typography
            variant='body1'
            component='a'
            onClick={() => navigate("/about-us")}
            sx={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.2rem",
              margin: "0 10px",
              color: !isScrolled ? "white" : "#22577A",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant='body1'
            component='a'
            onClick={() => navigate("/contact-us")}
            sx={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.2rem",
              margin: "0 10px",
              color: !isScrolled ? "white" : "#22577A",
            }}
          >
            Contact Us
          </Typography>
          <Button
            variant='contained'
            sx={{
              mx: "2.5rem",
              backgroundColor: "#80ED99",
              color: "#000000",
              fontWeight: "700",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#6CCD85",
              },
            }}
            onClick={() => navigate("/get-quote")}>
            {t('get_quote')}
          </Button>
        </Box>

        <Box
          sx={{
            width: "15%",
            justifyContent: "space-between",
            marginLeft: "16px",
          }}
        >
          <IconButton onClick={handleLanguageClick} sx={{ color:isScrolled? "#22577A": "white" }}>
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleLanguageClose()}
          >
            <MenuItem onClick={() => handleLanguageClose("en")}>
              English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageClose("hi")}>हिंदी</MenuItem>
          </Menu>
        </Box>
        {/* Hamburger Menu */}
        <IconButton
          aria-label='menu'
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "block", md: "none" },
            paddingRight: "1.5rem",
            mt: "5px",
            color:isScrolled? "#22577A": "white" }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer */}
        <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              padding: 2,
            }}
            role='presentation'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button component='a' onClick={() => navigate("/")}>
                <ListItemText primary='Home' />
              </ListItem>
              <ListItem button component='a' onClick={() => navigate("/products")} >
                <ListItemText primary='Product' />
              </ListItem>
              <ListItem button component='a' onClick={() => navigate("/services")} >
                <ListItemText primary='Services' />
              </ListItem>
              <ListItem button component='a' onClick={() => navigate("/about-us")} >
                <ListItemText primary='About Us' />
              </ListItem>
              <ListItem button component='a' onClick={() => navigate("/contact-us")} >
                <ListItemText primary='Contact Us' />
              </ListItem>
              <ListItem button component='a' onClick={() => navigate("/get-quote")}>
                <ListItemText primary='Get Quote' />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}


export default Navbar;
