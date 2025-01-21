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
  CardMedia,
  useMediaQuery,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import { styled } from "@mui/material/styles";
import { MdKeyboardArrowRight } from "react-icons/md";

import "../styles/Home.css";
import Image1 from "../assets/image1.jpeg";
import Image2 from "../assets/image2.jpg";
import Image4 from "../assets/waterFarmer.jpg";
import Offgrid from "../assets/offgrid.png";
import Ongrid from "../assets/ongrid.png";
import Hybrid from "../assets/hybrid.png";
import Kusum from "../assets/kusumYojana.png";
import Bijli from "../assets/muftBijli.png";
import HelpEligible from "../assets/helpElegibile.png";
import HelpDocument from "../assets/helpDocument.png";
import HelpApproval from "../assets/helpApproval.png";
import HelpGuidance from "../assets/helpGuidance.png";
import HelpTransperancy from "../assets/helpTransperancy.png";

const carouselItems = [
  {
    image: Image4,
    title: `PM Kusum 'A' Yojana`,
    description: "Pradhan Mantri Kisan Urja Suraksha evam Uthhan Mahabhiyan.",
  },
  {
    image: Image2,
    title: "Powering your Future with Sustainable Energy",
    description: "Harness the Sun, Save the Planet.",
  },
  {
    image: Bijli,
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
    image: Kusum,
    bgColor: "#CBFFD9", // light green
    borderColor: "#166534", // darker green
  },
  {
    title: "Reduced electricity bills.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus.",
    image: Bijli,
    bgColor: "#ABFDFF", // light blue
    borderColor: "#075985", // darker blue
  },
  {
    title: "Environmentally friendly and sustainable.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus.",
    image: Image2,
    bgColor: "#CBFFD9",
    borderColor: "#166534",
  },
  {
    title: "Energy independence and reliability.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida felis. Felis scelerisque gravida scelerisque nunc leo. Risus suscipit risus mattis aliquet luctus magna tellus nulla risus.",
    image: Image4,
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

const content = [
  {
    title: "Eligibility Assessment",
    description:
      "Our team evaluates your solar project to determine eligibility for available government subsidies and benefits, ensuring you maximize savings.",
    image: HelpEligible,
    bgColor: "#CBFFD9",
  },
  {
    title: "Documentation Support",
    description:
      "We handle the paperwork! From filing applications to submitting required documents, we guide you through the entire process hassle-free.",
    image: HelpDocument,
    bgColor: "#ABFDFF",
  },
  {
    title: "Guidance on State and Central Subsidies",
    description:
      "Whether it's central government incentives or state-level programs, we help you understand and access the financial benefits.",
    image: HelpGuidance,
    bgColor: "#CBFFD9",
  },
  {
    title: "Faster Approval Process",
    description:
      "With our expertise, we ensure your applications are accurate and complete, speeding up the approval process for subsidies.",
    image: HelpApproval,
    bgColor: "#ABFDFF",
  },
  {
    title: "Transparency at Every Step",
    description:
      "Stay informed! We provide regular updates on the status of your subsidy application so you’re always in the loop.",
    image: HelpTransperancy,
    bgColor: "#CBFFD9",
  },
];

export default function Home() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <div className='home-container'>
      <Carousel
        navButtonsAlwaysVisible
        indicators
        className='carousel-container'
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: "70px",
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
              className='carousel-slide'
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <Box
              sx={{
                position: "absolute",
                left: isMobile ? "70px" : "100px",
                top: isMobile ? "70%" : "50%",
                transform: "translateY(-50%)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                zIndex: "2",
              }}
            >
              <Typography
                variant={isMobile ? "h5" : "h3"}
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                {t(item.title)}
              </Typography>
              <Typography
                variant={isMobile ? "body5" : "h5"}
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                {item.description}
              </Typography>
              <Button variant='contained' style={style.carouselButton}>
                Learn More <MdKeyboardArrowRight />
              </Button>
            </Box>
          </>
        ))}
      </Carousel>
      <Box sx={{ backgroundColor: "#F2FDF5" }}>
        <Container maxWidth='lg' sx={{ py: 6 }}>
          <Box mb={8}>
            <Grid container spacing={4} alignItems='center'>
              <Grid item xs={12} md={6}>
                <HeroImage src={Image4} alt='Solar panel installation' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant='overline' color='primary' gutterBottom>
                  {t("ABOUT COMPANY")}
                </Typography>
                <Typography
                  variant='h3'
                  component='h1'
                  fontWeight='bold'
                  gutterBottom
                >
                  Lorem ipsum dolor sit amet consectetur.
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Lorem ipsum dolor sit amet consectetur. Faucibus vel sem
                  gravida felis. Felis scelerisque gravida scelerisque nunc leo.
                  Risus suscipit risus mattis aliquet luctus magna tellus nulla
                  risus.
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
              flexDirection: isMobile? 'column' : 'row'
            }}
          >
            {/* mission and values */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#CBFFD9",
                borderRadius:isMobile? '0' :  "500px 0 0 500px",
                padding: "40px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                Mission
              </Typography>
              <Typography
                variant='body1'
                sx={{ marginBottom: "10px", textAlign: "left" }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida
                felis. Felis scelerisque gravida scelerisque nunc leo. Risus
                suscipit risus mattis aliquet luctus magna tellus nulla risus.
                Est sed pulvinar morbi dolor in gravida enim amet sit. Cum mi
                accumsan faucibus habitasse sit semper porttitor nisl porttitor.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "#ABFDFF",
                borderRadius:isMobile? '0' :  "0 500px 500px 0",
                padding: "40px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                Values
              </Typography>
              <Typography
                variant='body1'
                sx={{ marginBottom: "10px", textAlign: "left" }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus vel sem gravida
                felis. Felis scelerisque gravida scelerisque nunc leo. Risus
                suscipit risus mattis aliquet luctus magna tellus nulla risus.
                Est sed pulvinar morbi dolor in gravida enim amet sit. Cum mi
                accumsan faucibus habitasse sit semper porttitor nisl porttitor.
              </Typography>
            </Box>
          </Box>

          {/* <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Typography
              variant='h4'
              component='h2'
              fontWeight='bold'
              gutterBottom
              mb={4}
            >
              Benefits of Choosing Solar
            </Typography>

            <Carousel
              autoPlay={true}
              interval={5000}
              animation='slide'
              navButtonsAlwaysVisible={true}
              // indicators={false}
            >
              {benefits.map((benefit, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: benefit.bgColor,
                    height: isMobile ? "25rem" : "10rem",
                    borderRadius: isMobile ? "1rem" : "20rem",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: isMobile ? "1rem" : "0rem",
                  }}
                >
                  <Box sx={{}}>
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: isMobile ? "250px" : "10rem",
                        height: isMobile ? "250px" : "10rem",
                        borderRadius: isMobile ? "1rem" : "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: isMobile ? "1rem" : "1rem",
                        backgroundImage: `url(${benefit.image})`,
                      }}
                    ></Box>
                  </Box>
                  <CardContent
                    sx={{
                      textAlign: isMobile ? "center" : "left",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: isMobile ? "center" : "flex-start",
                    }}
                  >
                    <Typography
                      variant='h6'
                      gutterBottom
                      fontWeight='bold'
                      sx={{ textAlign: isMobile ? "center" : "left" }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Box>
              ))}
            </Carousel>
          </Box> */}
          <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Typography
              variant='h4'
              component='h2'
              fontWeight='bold'
              gutterBottom
              mb={4}
            >
              Benefits of Choosing Solar
            </Typography>

            <Carousel
              autoPlay={true}
              interval={1000}
              animation='slide'
              navButtonsAlwaysVisible={false}
            >
              {benefits.map((benefit, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: benefit.bgColor,
                    height: isMobile ? "25rem" : "10rem",
                    borderRadius: isMobile ? "1rem" : "20rem",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: isMobile ? "1rem" : "0rem",
                  }}
                >
                  <Box sx={{}}>
                    <Box
                      sx={{
                        
                        flexShrink: 0,
                        width: isMobile ? "250px" : "9.5rem",
                        height: isMobile ? "250px" : "9.2rem",
                        borderRadius: isMobile ? "1rem" : "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: isMobile ? "1rem" : "1rem",
                        backgroundImage: `url(${benefit.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        ...(isMobile
                          ? {}
                          : {
                              border: `7px solid ${
                                benefit.borderColor || "blue"
                              }`, 
                            }),
                      }}
                    ></Box>
                  </Box>
                  <CardContent
                    sx={{
                      textAlign: isMobile ? "center" : "left",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: isMobile ? "center" : "flex-start",
                    }}
                  >
                    <Typography
                      variant='h6'
                      gutterBottom
                      fontWeight='bold'
                      sx={{ textAlign: isMobile ? "center" : "left" }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Box>
              ))}
            </Carousel>
          </Box>
          <Box
            sx={{ marginTop: "2rem", textAlign: isMobile ? "center" : "left" }}
          >
            <Typography
              variant='h4'
              component='h2'
              fontWeight='bold'
              gutterBottom
              mb={4}
            >
              How we help{" "}
            </Typography>
            <Grid
              container
              spacing={3}
              justifyContent='center'
              alignItems='center'
              sx={{ padding: "2rem" }}
            >
              {content.map((item, index) => (
                <Grid
                  item
                  key={index}
                  // xs={isMobile ? 12 : 4}
                  // sm={6}
                  // md={4}
                  // lg={4} // Adjust size for larger screens
                  // sx={{
                  // }}
                  >
                  <Box
                    sx={{
                      // margin:'2rem',
                      width:'15.5rem',
                      height:'15.5rem',
                      backgroundColor: item.bgColor,
                      borderRadius: "25px",
                      padding: "2rem",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      // height: "150px", // Ensure square shape
                      boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                      // boxShadow: "rgba(100, 100, 111, 0.15) 8.95px 5.95px 1.6px;",
                      // minWidth: "150px",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Box
                      component='img'
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "40px",
                        height: "40px",
                        marginBottom: "0.5rem",
                      }}
                    />
                    <Typography variant='h6' fontWeight='bold'>
                      {item.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary' fontSize={16}>
                      {item.description}
                    </Typography>
                  </Box>
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
              marginLeft: isMobile ? "1rem" : "0rem",
              marginRight: isMobile ? "1rem" : "0rem",
            }}
          >
            <Box>
              <Typography
                variant={isMobile ? "body1" : "h6"}
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
                variant='h6'
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
              Get Quote <MdKeyboardArrowRight />
            </Button>
          </Box>
        </Box>

        <Box sx={{ padding: "20px" }}>
          <Typography
            variant='h4'
            sx={{
              textAlign: "centre",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Featured Services
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{ maxWidth: "80rem", margin: "auto" }}
          >
            {featuredServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  sx={{
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    maxWidth: isMobile ? "20rem" : "35rem",
                    minHeight: "22.5rem",
                    backgroundColor: service.bgColor,
                  }}
                >
                  <CardMedia
                    component='img'
                    image={service.image}
                    alt={service.title}
                    sx={{
                      margin: "auto",
                    maxWidth: isMobile ? "18rem" : "30rem",
                      objectFit: "cover",
                      borderRadius: "10px",
                      padding: isMobile ? "1rem" : "2rem",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant='h6'
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
                      variant='body2'
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

// const BenefitImage = styled("div")(({ bgcolor }) => ({
//   width: 120,
//   height: 120,
//   borderRadius: "50%",
//   padding: 4, // Border thickness
//   backgroundColor: bgcolor, // Darker border color
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   "& img": {
//     width: "100%",
//     height: "100%",
//     borderRadius: "50%",
//     objectFit: "cover",
//   },
// }));

// const BenefitCard = styled(Card)(({ bgcolor }) => ({
//   backgroundColor: bgcolor,
//   boxShadow: "none",
//   borderRadius: 16,
//   height: "100%",
// }));

const BenefitCard = styled(Box)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,
  borderRadius: "1rem",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    borderRadius: "20rem",
  },
}));

const BenefitImage = styled(Box)(({ theme, bgcolor }) => ({
  flexShrink: 0,
  width: "100%",
  height: "200px",
  borderRadius: "1rem",
  backgroundColor: bgcolor,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "250px",
    height: "250px",
    marginBottom: "0",
    marginRight: "1rem",
  },
}));

const HeroImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 8,
  maxHeight: 400,
});
