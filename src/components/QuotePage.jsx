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
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pincode: "",
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
    if (!formData.pincode.trim() || !/^\d+$/.test(formData.pincode))
      newErrors.pincode = "Valid phone number is required.";
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

  const handleSubmit = async () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const emailData = {
      name: formData.name,
      phone: formData.phone,
      pincode: formData.pincode,
      email: formData.email,
      propertyType: Object.keys(formData.propertyType)
        .filter((key) => formData.propertyType[key])
        .join(", "),
      contactMethod: formData.contactMethod,
      powerRequirement: formData.powerRequirement,
    };
    setSubmitting(true);
    try {
      await emailjs.send(
        "service_0qqvdpi",
        "template_c5yvpd5",
        {
          to_email: "mailtosatyamshivam@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          pincode: formData.pincode,
          message: `
        Quotation required:
          Name: ${emailData.name}
          Phone: ${emailData.phone}
          Pincode: ${emailData.pincode}
          Email: ${emailData.email}
          Property Type: ${emailData.propertyType}
          Prefered contact method: ${emailData.contactMethod}
          Power requirement: ${emailData.powerRequirement}
        `,
        },
        "O2fqAR580jrXQXYvy"
      );
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#F2FDF5" }}>
      {/* image section */}
      <Box
        sx={{
          position: "relative",
          width: "100vw", // Full width
          height: isMobile ? "175px" : "300px",
          color: "white",
          textAlign: "left",
          overflow: "hidden", // Ensure SVG doesn't cause overflow
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
            backgroundImage: `url(${Image2})`,
            filter: "blur(4px)",
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
              Get Quote
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
            height: isMobile ? "35px" : "80px",
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

      <Box
        sx={{ display: "flex", flexDirection: "center", alignItems: "center" }}
      >
        <Grid
          container
          spacing={4}
          sx={{ padding: "40px 20px", maxWidth: "100rem" }}
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
                  Pincode <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='pincode'
                  value={formData.pincode}
                  onChange={handleInputChange}
                  error={!!errors.pincode}
                  helperText={errors.pincode}
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
