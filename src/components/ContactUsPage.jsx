import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import emailjs from "@emailjs/browser";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MaintainencePanel } from "../constants/images";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return !value.trim() ? "Name is required" : "";
      case "phone":
        return !/^\d{10}$/.test(value)
          ? "Please enter a valid 10-digit phone number"
          : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email address"
          : "";
      case "message":
        return !value.trim() ? "Message is required" : "";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);

    try {
      await emailjs.send(
        "service_2wuul2m",
        "template_ktyvfbj",
        {
          to_email: "mailtosatyamshivam@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "Nu3r_ezUzYgZsawmK"
      );

      setFormData({ name: "", phone: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#F2FDF5", overflowX:"hidden" }}>
      <Box
        sx={{
          position: "relative",
          width: "100vw", // Full width
          height: isMobile? '175px' : "300px",
          color: "white",
          textAlign: "left",
          overflow: "hidden", 
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${MaintainencePanel})`,
            filter: "blur(2px)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Content Box */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "45px",
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant={isMobile ? "h5" : "h3"}
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Contact Us
            </Typography>
          </Box>
        </Box>

        {/* Curved Bottom Effect */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: isMobile?'35px': "80px",
          }}
        >
          <svg
            viewBox='0 0 1440 320'
            width='100%'
            height='100%'
            preserveAspectRatio='none'
          >
            <defs>
              <linearGradient
                id='waveGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='rgba(203,255,217,1)' />
                <stop offset='35%' stopColor='rgba(171,253,255,1)' />
                <stop offset='100%' stopColor='rgba(0,212,255,1)' />
              </linearGradient>
            </defs>
            <path
              fill='url(#waveGradient)'
              fillOpacity='1'
              d='M0,256L60,250.7C120,245,240,235,360,240C480,245,600,267,720,256C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192V320H0Z'
            ></path>
          </svg>
        </Box>

        {/* Decorative Wavy Line */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-10px",
            left: 0,
            width: "100%",
            height: "30px",
          }}
        >
          <svg
            viewBox='0 0 1440 320'
            width='100%'
            height='100%'
            preserveAspectRatio='none'
          >
            <path
              fill='rgba(255,255,255,0.5)'
              fillOpacity='1'
              d='M0,256L120,250.7C240,245,480,235,720,240C960,245,1200,267,1320,256L1440,250V320H0Z'
            ></path>
          </svg>
        </Box>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{ padding: "20px 20px"}}
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={6}>
          <Box sx={{ maxWidth: "45rem", margin:'auto' }}>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{ fontWeight: "bold", marginBottom: "20px" }}
            >
              Get in Touch with Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
                margin="normal"
                required
                sx={inputFieldSx}
              />

              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                error={!!errors.phone}
                helperText={errors.phone}
                margin="normal"
                required
                sx={inputFieldSx}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                required
                sx={inputFieldSx}
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                error={!!errors.message}
                helperText={errors.message}
                margin="normal"
                required
                sx={inputFieldSx}
              />

              <Button
                onClick={handleSubmit}
                disabled={submitting}
                variant='contained'
                sx={{
                  backgroundColor: "#80ED99",
                  width: "8rem",
                  margin: "auto",
                  color: "#000000",
                  fontWeight: "700",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#6CCD85",
                  },
                }}
              >
                {submitting ? "Sending..." : "Submit"}
                <MdKeyboardArrowRight />
              </Button>
            </form>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} sx={{}}>
          <Card
            sx={{
              padding: "20px",
              backgroundColor: "#CBFFD9",
              marginTop: "25px",
              maxWidth: "45rem",
              boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                    borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{ fontWeight: "bold", marginBottom: "20px" }}
              >
                Our Office
              </Typography>
              
              <List>
                <ListItem>
                  <ListItemText
                    primary="Address"
                    secondary="GS-117, Ground floor, Aashirwad plaza, Dekaha Rewa, M.P India. 486001"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone" secondary="7898725971 / 7974653645
" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Email"
                    secondary=" heliomaaxinfo@gmail.com"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Working Hours"
                    secondary="Mon - Fri: 10 AM - 6 PM"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const inputFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderWidth: "1.5px",
    borderColor: "#000000",
    "& fieldset": { border: "1.5px solid black" },
    "&:hover fieldset": { borderColor: "grey", border: "2.5px solid grey" },
    "&.Mui-focused fieldset": {
      borderColor: "grey",
      border: "2.5px solid grey",
    },
  },
};

export default ContactUs;
