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
import Image2 from "../assets/image1.jpeg";

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
        "service_gzr2xyi",
        "template_2m80zuy",
        {
          to_email: "mailtosatyamshivam@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "O2fqAR580jrXQXYvy"
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
    <Box sx={{ backgroundColor: "#F2FDF5" }}>
      <Box
        sx={{
          position: "relative",
          height: "300px",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${Image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(4px)",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant={isMobile ? "h5" : "h3"}
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Contact Us
            </Typography>
            <Typography variant={isMobile ? "body2" : "body1"}>
              To request a quote, contact us directly or fill out the form and
              we will get back to you promptly.
            </Typography>
          </Box>
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
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={submitting}
                sx={{ mt: 2 }}
              >
                {submitting ? "Sending..." : "Submit"}
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
                    secondary="1234 Street Name, City, Country"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone" secondary="(123) 456-7890" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Email"
                    secondary="contact@company.com"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Working Hours"
                    secondary="Mon - Fri: 9 AM - 6 PM"
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
