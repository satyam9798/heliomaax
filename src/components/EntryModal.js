import { Box, Button, TextField, Typography, Modal } from "@mui/material";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdKeyboardArrowRight } from "react-icons/md";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";

export const EntryModal = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
  });

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsPopupOpen(true);
    }
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await emailjs.send(
        "service_2wuul2m",
        "template_ktyvfbj",
        {
          to_email: "mailtosatyamshivam@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          pincode: formData.pincode,
          message: `Hey, my name is ${formData.name}. Please contact me on my email: ${formData.email} or phone ${formData.phone}. My pincode is ${formData.pincode}`,
        },
        "Nu3r_ezUzYgZsawmK"
      );
      sessionStorage.setItem("hasSeenPopup", "true");
      setIsPopupOpen(false);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917898725971", "_blank");
  };

  const handleEnquireNowClick = () => {
    navigate("/contact-us");
  };

  return (
    <Box>
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
              label='Full Name'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label='Phone Number'
              name='phone'
              type='tel'
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label='Email Address'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label='Pincode'
              name='pincode'
              type='number'
              value={formData.pincode}
              onChange={handleChange}
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

              <Button
                type='submit'
                variant='contained'
                sx={{
                  backgroundColor: "#80ED99",
                  width: "8rem",
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
      <Box
        onClick={handleWhatsAppClick}
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          animation: "vibrate 1s infinite",
          "&:hover": {
            backgroundColor: "#1EBE5D",
          },
          zIndex: 1,
        }}
      >
        <WhatsAppIcon sx={{ color: "#fff", fontSize: "32px" }} />
      </Box>
      {/* Enquire Now Button */}
      <Box
        onClick={handleEnquireNowClick}
        sx={{
          position: "fixed",
          top: "65%",
          right: 0,
          backgroundColor: "#22577A",
          color: "#fff",
          width: "35px",
          height: "130px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px 0 0 10px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#FF8C00",
          },
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            transform: "rotate(90deg)",
            whiteSpace: "nowrap",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Enquire Now
        </Typography>
      </Box>

      {/* css for whatsapp icon */}
      <style>
        {`
          @keyframes vibrate {
            0% { transform: translate(0, 0); }
            20% { transform: translate(-1px, 1px); }
            40% { transform: translate(1px, -1px); }
            60% { transform: translate(-1px, 1px); }
            80% { transform: translate(1px, -1px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>
    </Box>
  );
};
