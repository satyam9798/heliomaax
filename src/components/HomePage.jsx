/* eslint-disable react/no-direct-mutation-state */
// eslint-disable-next-line
import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
  useTheme,
  CardMedia,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { MdKeyboardArrowRight } from "react-icons/md";

import "../styles/Home.css";
import Image1 from "../assets/image1.jpeg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/waterFarmer.jpg";
import Offgrid from "../assets/offgrid.png";
import Ongrid from "../assets/ongrid.png";
import Hybrid from "../assets/hybrid.png";

const carouselItems = [
  {
    image: Image1,
    title: `PM Kusum 'A' Yojana`,
    description: "Pradhan Mantri Kisan Urja Suraksha evam Uthhan Mahabhiyan.",
  },
  {
    image: Image2,
    title: "Powering your Future with Sustainable Energy",
    description: "Harness the Sun, Save the Planet.",
  },
  {
    image: Image3,
    title: "PM Surya Ghar: Muft Bijli Yojana",
    description:
      "Goverment Scheme that aims to provide free electricity to households in India.",
  },
  {
    image: Image4,
    title: "PM Kusum 'B' Yojana",
    description: "Mukhyamantri Solar Pump Yojana.",
  },
];

const benefits = [
  {
    title:
      "Send extra energy to the grid and get credited directly into your account.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus.",
    image: Image1,
    bgColor: "#CBFFD9", // light green
    borderColor: "#166534", // darker green
  },
  {
    title: "Reduced electricity bills.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus.",
    image: Image1,
    bgColor: "#ABFDFF", // light blue
    borderColor: "#075985", // darker blue
  },
  {
    title: "Environmentally friendly and sustainable.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus.",
    image: Image1,
    bgColor: "#CBFFD9",
    borderColor: "#166534",
  },
  {
    title: "Energy independence and reliability.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus.",
    image: Image1,
    bgColor: "#ABFDFF",
    borderColor: "#075985",
  },
];

const featuredServices = [
  {
    image: Offgrid,
    title: "Rooftop Solar Installations",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus. Est sed pulvinar morbi dolor in gravida enim amet sit. Cum mi accumsan faucibus habitasse sit semper porttitor nisl porttitor. ",
    bgColor: "#ABFDFF",
  },
  {
    image: Ongrid,
    title: "On Grid System",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus. Est sed pulvinar morbi dolor in gravida enim amet sit. Cum mi accumsan faucibus habitasse sit semper porttitor nisl porttitor. ",
    bgColor: "#CBFFD9",
  },
  {
    image: Offgrid,
    title: "Off Grid System",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus. Est sed pulvinar morbi dolor in gravida enim amet sit. Cum mi accumsan faucibus habitasse sit semper porttitor nisl porttitor. ",
    bgColor: "#ABFDFF",
  },
  {
    image: Hybrid,
    title: "Hybrid System",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus. Est sed pulvinar morbi dolor in gravida enim amet sit. Cum mi accumsan faucibus habitasse sit semper porttitor nisl porttitor. ",
    bgColor: "#CBFFD9",
  },
];

export default function Home() {
  const theme = useTheme();

  return (
    <div className="home-container">
      <Carousel
        navButtonsAlwaysVisible
        indicators
        className="carousel-container"
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: "rgba(255, 255, 255, 0.5)",
            width: "20px",
            height: "40px",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: { color: "#80ED99" },
        }}
      >
        {carouselItems.map((item, index) => (
          <>
            <div
              className="carousel-slide"
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="carousel-content">
              <h1 style={style.carouselHeader}>{item.title}</h1>
              <p style={style.carouselDescription}>{item.description}</p>
              <Button variant="contained" style={style.carouselButton}>
                Learn More <MdKeyboardArrowRight />
              </Button>
            </div>
          </>
        ))}
      </Carousel>
      <Box sx={{ backgroundColor: "#F2FDF5" }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box mb={8}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <HeroImage src={Image4} alt="Solar panel installation" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="overline" color="primary" gutterBottom>
                ABOUT COMPANY
              </Typography>
              <Typography
                variant="h3"
                component="h1"
                fontWeight="bold"
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida
                felis. Felis scelerisque gravida scelerisque nunc leo. Risus
                suscipit risus mattis aliquet luctus magna tellus nulla risus.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            margin: "20px 0",
          }}
        >
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#CBFFD9",
              borderRadius: "500px 0 0 500px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "10px", textAlign:'left' }}
            >
              Mission
            </Typography>
            <Typography variant="body1" sx={{  marginBottom: "10px", textAlign:'left' }}>
              This is the description for the left box.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              backgroundColor: "#ABFDFF",
              borderRadius: "0 500px 500px 0",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "10px", textAlign:'left' }}
            >
              Values
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "10px", textAlign:'left' }}>
              This is the description for the right box.
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            gutterBottom
            mb={4}
          >
            Benefits of Choosing Solar
          </Typography>

          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} key={index}>
                <BenefitCard
                  bgcolor={benefit.bgColor}
                  sx={{
                    borderRadius: "50rem",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      py: 3,
                      flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    }}
                  >
                    <Box
                      flex={1}
                      px={3}
                      textAlign={index % 2 === 0 ? "left" : "right"}
                    >
                      <Typography variant="h6" gutterBottom fontWeight="bold">
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {benefit.description}
                      </Typography>
                    </Box>
                    <BenefitImage bgcolor={benefit.borderColor}>
                      <img src={benefit.image} alt={benefit.title} />
                    </BenefitImage>
                  </CardContent>
                </BenefitCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          width: "100%",
          height: "7rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#22577A", // Background color for the box
          // padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          margin: "auto",
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            width: "65%",
            display: "flex",
            justifyContent: "space-around",
            // marginleft:'auto'
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                color: "white",
                textAlign: "left",
              }}
            >
              Ready to install Solar Panel at your premises.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                color: "white",
                textAlign: "left",
              }}
            >
              Get your quote now!
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "35%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
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
            Get Quote <MdKeyboardArrowRight />
          </Button>
        </Box>
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "centre",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Featured Services
        </Typography>
        <Grid container spacing={4} sx={{maxWidth:'80rem', margin:'auto'}}>
          {featuredServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  maxWidth: "35rem",
                  minHeight: "22.5rem",
                  backgroundColor:service.bgColor
                }}
              >
                <CardMedia
                  component="img"
                  height="350"
                  width="100"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    objectFit: "cover", 
                    borderRadius: "10px", 
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                      whiteSpace: "pre-line",
                      textAlign: "left",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "left", 
                      whiteSpace: "pre-line", 
                      margin: 0, 
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Box>
    </div>
  );
}
const style = {
  carouselButton: {
    backgroundColor: "#80ED99",
    color: "#000000",
    fontWeight: "600",
  },
  carouselHeader: {
    fontSize: 60,
  },
  carouselDescription: {
    fontSize: 30,
  },
};

const BenefitImage = styled("div")(({ bgcolor }) => ({
  width: 120,
  height: 120,
  borderRadius: "50%",
  padding: 4, // Border thickness
  backgroundColor: bgcolor, // Darker border color
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

const BenefitCard = styled(Card)(({ bgcolor }) => ({
  backgroundColor: bgcolor,
  boxShadow: "none",
  borderRadius: 16,
  height: "100%",
}));

const HeroImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 8,
  maxHeight: 400,
});
