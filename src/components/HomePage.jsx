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
import Tool1 from "../assets/tool1.png";
import Tool2 from "../assets/tool2.png";
import Tool3 from "../assets/tool3.png";
import Tool4 from "../assets/tool4.png";

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
    title: "Get credited directly into your account for extra energy",
    description:
      "Generate more energy than you use and get rewarded by having the extra energy credited to your account. This ensures maximum utilization of your solar investment while earning additional benefits.",
    image: Tool3,
    bgColor: "#CBFFD9",
    borderColor: "#90EE90",
  },
  {
    title: "Reduced electricity bills.",
    description:
      "By switching to solar energy, you can significantly lower your monthly electricity expenses. Solar panels provide a cost-effective solution by harnessing free energy from the sun.",
    image: Tool2,
    bgColor: "#ABFDFF",
    borderColor: "#38A3A5",
  },
  {
    title: "Environmentally friendly and sustainable.",
    description:
      "Solar energy is clean, renewable, and helps reduce your carbon footprint. By choosing solar, you're contributing to a healthier planet and a sustainable future for generations to come.",
    image: Tool4,
    bgColor: "#CBFFD9",
    borderColor: "#90EE90",
  },
  {
    title: "Energy independence and reliability.",
    description:
      "Solar power allows you to reduce dependency on traditional energy sources, giving you greater control over your energy supply. It’s a reliable and sustainable way to power your home or business.",
    image: Tool1,
    bgColor: "#ABFDFF",
    borderColor: "#38A3A5",
  },
];

const featuredServices = [
  {
    image: Offgrid,
    title: "Rooftop Solar Installations",
    description:
      "Transform your rooftop into a source of clean, renewable energy. Our rooftop solar installations are tailored to maximize energy generation while blending seamlessly with your space, helping you save on electricity bills and contribute to a greener planet.",
    bgColor: "#ABFDFF",
  },
  {
    image: Ongrid,
    title: "On Grid System",
    description:
      "Connect your solar system directly to the utility grid to reduce dependency on traditional energy sources. With an on-grid system, you can enjoy lower electricity costs while feeding surplus energy back to the grid for additional benefits.",
    bgColor: "#CBFFD9",
  },
  {
    image: Offgrid,
    title: "Off Grid System",
    description:
    "Achieve complete energy independence with an off-grid solar system. This system stores solar energy in batteries, ensuring a reliable power supply even in remote areas or during power outages, providing unmatched reliability and sustainability.",
    bgColor: "#ABFDFF",
  },
  {
    image: Hybrid,
    title: "Hybrid System",
    description:
      "Combine the benefits of on-grid and off-grid systems with a hybrid solar solution. This system allows you to store excess energy in batteries while staying connected to the grid for additional flexibility and efficiency.",
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
      "Stay informed! We provide regular updates on the status of your subsidy application so you're always in the loop.",
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
                {t(item.description)}
              </Typography>
              <Button variant='contained' style={style.carouselButton}>
                Learn More <MdKeyboardArrowRight />
              </Button>
            </Box>
          </>
        ))}
      </Carousel>
      <Box sx={{ backgroundColor: "#F2FDF5" }}>
        <Box
          sx={{ py: 6, maxWidth: isMobile ? "100vw" : "85vw", margin: "auto" }}
        >
          <Box mb={8}>
            <Grid
              alignItems='center'
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: isMobile ? "15rem" : "40rem",
                    height: isMobile ? "15rem" : "20rem",
                    backgroundImage: `url(${Image4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    margin: "auto",
                    borderRadius: "10px",
                    padding: isMobile ? "1rem" : "2rem",
                  }}
                  alt='Solar panel installation'
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  mx: "2rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant='h5'
                  color='#22577A'
                  fontWeight='bold'
                  gutterBottom
                  sx={{
                    my: "1rem",
                  }}
                >
                  {t("ABOUT COMPANY")}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  We help individuals and businesses install solar panels easily
                  and affordably using government schemes. Our mission is to
                  make renewable energy accessible to everyone, reducing
                  electricity costs and protecting the environment. With a focus
                  on quality, we provide end-to-end support, from consultation
                  to installation. Our team ensures you get the best benefits
                  from government subsidies and schemes. Join us in creating a
                  greener and sustainable future for all.
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
              flexDirection: isMobile ? "column" : "row",
              mx: "2rem",
            }}
          >
            {/* mission and values */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#CBFFD9",
                borderRadius: isMobile ? "0" : "500px 0 0 500px",
                padding: "3rem",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                height: isMobile ? "10rem" : "12rem",
                ...(isMobile
                  ? {
                      width: "15.5rem",
                      height: "15.5rem",
                      borderRadius: "25px",
                      padding: "2rem",
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                    }
                  : {
                      height: "12rem",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    }),
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                Mission
              </Typography>
              <Typography
                variant='body1'
                sx={{ marginBottom: "10px", textAlign: "left" }}
              >
                We aim to simplify the adoption of solar energy through
                government schemes, reducing dependency on non-renewable
                resources. By delivering reliable solutions and exceptional
                service, we strive to lower energy costs for households and
                businesses. Together, we are building a sustainable tomorrow,
                one solar panel at a time.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "#ABFDFF",
                borderRadius: isMobile ? "0" : " 0 500px 500px 0",
                padding: "3rem",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                height: isMobile ? "10rem" : "12rem",
                ...(isMobile
                  ? {
                      width: "15.5rem",
                      height: "15.5rem",
                      borderRadius: "25px",
                      padding: "2rem",
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                    }
                  : {
                      height: "12rem",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    }),
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                Values
              </Typography>
              <Typography
                variant='body1'
                sx={{ marginBottom: "10px", textAlign: "left" }}
              >
                We believe in sustainability, innovation, and integrity as the
                foundation of our work. We value collaboration, working closely
                with clients and communities to achieve shared goals. At the
                heart of our company is a passion for creating lasting
                environmental and economic impact through renewable energy.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", my: "3rem" }}>
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
              navButtonsAlwaysVisible={false}
            >
              {benefits.map((benefit, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: benefit.bgColor,
                    height: isMobile ? "27rem" : "11rem",
                    width: isMobile ? "20rem" : "65rem",
                    borderRadius: isMobile ? "1rem" : "20rem",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: isMobile ? "1rem" : "0rem",
                    margin: "auto",
                    mx: isMobile ? "2rem" : "auto",
                  ...(isMobile?{
                    borderRadius: "25px",
                      // padding: "2rem",
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                  }:{})
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      borderRadius: isMobile ? "1rem" : "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      ...(isMobile
                        ? {
                            width: "19.5rem",
                            height: "14rem",
                            marginRight: "1rem",
                            marginTop: "2rem",
                            borderRadius: "1rem",
                          }
                        : {
                            width: "10.2rem",
                            height: "10.2rem",
                            marginRight: "1rem",
                            marginTop: "0rem",
                            borderRadius: "50%",
                            border: `7px solid ${
                              benefit.borderColor || "blue"
                            }`,
                          }),
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${benefit.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        ...(isMobile
                          ? {
                              width: "15.5rem",
                              height: "11rem",
                            }
                          : {
                              width: "7rem",
                              height: "7rem",
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
                      {t(benefit.title)}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      {t(benefit.description)}
                    </Typography>
                  </CardContent>
                </Box>
              ))}
            </Carousel>
          </Box>
          <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
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
                <Grid item key={index}>
                  <Box
                    sx={{
                      // margin:'2rem',
                      width: "15.5rem",
                      height: "15.5rem",
                      backgroundColor: item.bgColor,
                      borderRadius: "25px",
                      padding: "2rem",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      // height: "150px", // Ensure square shape
                      boxShadow:
                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
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
                      {t(item.title)}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      fontSize={16}
                    >
                      {t(item.description)}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

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
              textAlign: "center",
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
                    boxShadow:
                      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                    borderRadius: "10px",
                    maxWidth: isMobile ? "20rem" : "35rem",
                    minHeight: "22.5rem",
                    backgroundColor: service.bgColor,
                    ...(isMobile?{}:{
                      height:'32.5rem'
                    })
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
                      {t(service.title)}
                    </Typography>
                    <Typography
                      variant={isMobile ? "body2" : "body1"}
                      sx={{
                        textAlign: "left",
                        whiteSpace: "pre-line",
                        margin: 0,
                      }}
                    >
                      {t(service.description)}
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
