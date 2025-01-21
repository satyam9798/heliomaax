import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  MenuItem,
  Select,
  CardMedia,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

import emailjs from "@emailjs/browser";
import Image2 from "../assets/image1.jpeg";
import QuoteImg from "../assets/getQuote.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Quote = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: { residential: false, commercial: false },
    contactMethod: "",
    powerRequirement: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim() || !/^\d+$/.test(formData.phone))
      newErrors.phone = "Valid phone number is required.";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = "Valid email is required.";
    if (!formData.propertyType.residential && !formData.propertyType.commercial)
      newErrors.propertyType = "Select at least one property type.";
    if (!formData.contactMethod)
      newErrors.contactMethod = "Preferred contact method is required.";
    if (!formData.powerRequirement)
      newErrors.powerRequirement = "Select power requirement.";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      propertyType: { ...prev.propertyType, [name]: checked },
    }));
    setErrors((prev) => ({ ...prev, propertyType: "" }));
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const emailData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      propertyType: Object.keys(formData.propertyType)
        .filter((key) => formData.propertyType[key])
        .join(", "),
      contactMethod: formData.contactMethod,
      powerRequirement: formData.powerRequirement,
    };

    emailjs
      .send(
        "service_id", // Replace with your EmailJS service ID
        "template_id", // Replace with your EmailJS template ID
        emailData,
        "user_id" // Replace with your EmailJS user ID
      )
      .then(
        () => alert("Email sent successfully!"),
        (error) => alert("Failed to send email. Please try again.")
      );
  };

  return (
    <Box sx={{ backgroundColor: "#F2FDF5" }}>
      <Box
        sx={{
          position: "relative",
          height: "300px",
          color: "white",
          textAlign: "left",
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
              Get Quote
            </Typography>
            <Typography variant={isMobile ? "body2" : "body1"}>
              To request a quote, fill out the requirement form and we will get
              back to you promptly.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "center", alignItems: "center" }}
      >
        <Grid
          container
          spacing={4}
          sx={{ padding: "40px 20px", maxWidth: "100rem", margin: "auto" }}
        >
          <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
            <Box sx={{}}>
              <CardMedia
                component='img'
                image={QuoteImg}
                alt='Get Quote'
                sx={{
                  borderRadius: "10px",
                  maxWidth: "45rem",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <form noValidate>
              <Box sx={{ marginBottom: "20px" }}>
                <Typography
                  component='label'
                  sx={{
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  Name <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  sx={inputFieldSx}
                />
              </Box>

              <Box sx={{ marginBottom: "20px" }}>
                <Typography
                  component='label'
                  sx={{ fontWeight: "bold", display: "block" }}
                >
                  Phone <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  sx={inputFieldSx}
                />
              </Box>

              <Box sx={{ marginBottom: "20px" }}>
                <Typography
                  component='label'
                  sx={{ fontWeight: "bold", display: "block" }}
                >
                  Email <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={inputFieldSx}
                />
              </Box>

              <Box sx={{ marginBottom: "20px" }}>
                <Typography
                  component='label'
                  sx={{ fontWeight: "bold", display: "block" }}
                >
                  Property Type <span style={{ color: "red" }}>*</span>
                </Typography>
                <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.propertyType.residential}
                        onChange={handleCheckboxChange}
                        name='residential'
                      />
                    }
                    label='Residential'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.propertyType.commercial}
                        onChange={handleCheckboxChange}
                        name='commercial'
                      />
                    }
                    label='Commercial'
                  />
                </FormControl>
                {errors.propertyType && (
                  <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.propertyType}
                  </Typography>
                )}
              </Box>

              <Box sx={{ marginBottom: "20px" }}>
                <Typography
                  component='label'
                  sx={{ fontWeight: "bold", display: "block" }}
                >
                  Preferred Contact Method{" "}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    name='contactMethod'
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                  >
                    <FormControlLabel
                      value='phone'
                      control={<Radio />}
                      label='Phone'
                    />
                    <FormControlLabel
                      value='email'
                      control={<Radio />}
                      label='Email'
                    />
                  </RadioGroup>
                </FormControl>
                {errors.contactMethod && (
                  <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.contactMethod}
                  </Typography>
                )}
              </Box>

              <Box sx={{ marginBottom: "20px" }}>
                <Typography
                  component='label'
                  sx={{ fontWeight: "bold", display: "block" }}
                >
                  Power Requirement <span style={{ color: "red" }}>*</span>
                </Typography>
                <Select
                  fullWidth
                  value={formData.powerRequirement}
                  name='powerRequirement'
                  onChange={handleInputChange}
                  displayEmpty
                  inputProps={{
                    style: {
                      borderRadius: "20px",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px", // Add border radius for dropdown container
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "10px", // Add border radius for border outline
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        borderRadius: "10px", // Add border radius for the dropdown menu
                      },
                    },
                  }}
                >
                  <MenuItem value='' disabled>
                    Select Power Requirement
                  </MenuItem>
                  <MenuItem value='1kw-3kw'>1kw-3kw</MenuItem>
                  <MenuItem value='3kw-6kw'>3kw-6kw</MenuItem>
                  <MenuItem value='6kw and above'>6kw and above</MenuItem>
                </Select>
                {errors.powerRequirement && (
                  <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.powerRequirement}
                  </Typography>
                )}
              </Box>

              {/* <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
              >
                Submit
              </Button> */}
              <Button
                onClick={handleSubmit}
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
                submit
                <MdKeyboardArrowRight />
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
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

export default Quote;
