import React, { useRef, useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/material/styles";

import Kusum from "../assets/kusumYojana.png";
import Bijli from "../assets/muftBijli.png";
import Image2 from "../assets/image1.jpeg";
import Subsidy from "../assets/subsidy.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Bank from "../assets/bank.png";
import Discom from "../assets/discom.png";
import HelpEligible from "../assets/helpElegibile.png";
import HelpDocument from "../assets/helpDocument.png";
import HelpApproval from "../assets/helpApproval.png";
import HelpGuidance from "../assets/helpGuidance.png";
import HelpTransperancy from "../assets/helpTransperancy.png";
import Site from "../assets/siteAsessment.png";
import Support from "../assets/support.png";
import SystemTesting from "../assets/systemTesting.png";
import Customer from "../assets/customer.png";
import Routine from "../assets/routine.png";
import Cleaning from "../assets/cleaning.png";
import Repair from "../assets/repair.png";
import SystemUpgrade from "../assets/systemUpgrade.png";

const items = [
  {
    title: "Component A of the PM-KUSUM Scheme",
    description:
      "Component A of the PM-KUSUM Scheme focuses on the installation of grid-connected ground-mounted solar power plants, with each plant having a capacity of up to 2 MW. \n \n The goal is to achieve a total capacity of 10 GW across the country. Farmers, cooperatives, panchayats, and Farmer Producer Organizations (FPOs) can set up these plants on barren or unused land. The electricity generated is supplied to the power grid, providing an additional source of income to farmers through the sale of power to distribution companies (DISCOMs) at pre-determined tariffs. \n \n This initiative promotes renewable energy and supports farmers financially while utilizing unused land effectively.",
    image: Kusum,
    bgColor: "#ABFDFF",
  },
  {
    title: "Component B of the PM-KUSUM Scheme",
    description:
      "Component B of the PM-KUSUM Scheme involves the installation of 1.75 million standalone solar pumps for irrigation in off-grid areas. \n \n These pumps replace diesel-powered systems, reducing fuel costs and environmental impact. Farmers benefit from reliable irrigation, lower expenses, and increased agricultural productivity while promoting sustainable energy use in rural regions.",
    image: Image2,
    bgColor: "#CBFFD9",
  },
  {
    title: "The PM Surya Urja Ghar Scheme",
    description:
      "The PM Surya Urja Ghar scheme, part of the PM KUSUM initiative, promotes the installation of rooftop solar systems, particularly for farmers, to encourage clean energy use.  \n \n The program offers subsidies, technical support, and financial incentives to make solar energy more accessible, aiming to reduce dependence on traditional power sources and enhance sustainability.",
    image: Bijli,
    bgColor: "#ABFDFF",
  },
];

const bankService = {
  title: "Bank Finance Assistance",
  description:
    "We believe that adopting solar energy should be accessible to everyone, regardless of budget constraints. We're here to bridge the gap between your solar ambitions and financial limitations. \n \n With our bank finance facilitation services, you can enjoy the benefits of clean, renewable energy without financial stress.",
  image: Bank,
  bgColor: "#CBFFD9",
};
const bankContent = [
  {
    title: "Flexible Financing Options",
    description:
      "We partner with leading banks and financial institutions to offer a variety of financing plans tailored to your needs, including low-interest loans and EMI.",
    image: HelpGuidance,
    bgColor: "#CBFFD9",
  },
  {
    title: "Loan Eligibility Guidance",
    description:
      "Our experts assess your financial profile to determine eligibility and recommend the best loan options for your solar project.",
    image: HelpEligible,
    bgColor: "#ABFDFF",
  },
  {
    title: "Documentation Support",
    description:
      "From preparing loan applications to submitting required paperwork, we assist you at every step, making the financing process smooth.",
    image: HelpDocument,
    bgColor: "#CBFFD9",
  },
  {
    title: "Expedited Approvals",
    description:
      "With our strong relationships with financial institutions, we help expedite loan approvals so you can kick-start your solar journey without delays.",
    image: HelpApproval,
    bgColor: "#ABFDFF",
  },
];

const discomService = {
  title: "DisCom Approval Support",
  description:
    "Obtaining approvals from electricity distribution companies (DISCOM) is a critical step in your solar installation journey, but it doesn't have to be overwhelming. We ensure that obtaining DISCOM approvals is a smooth and stress-free experience. \n \n Let us handle the paperwork and processes so you can focus on enjoying the benefits of clean, renewable energy. \n \n Contact us today to get started on your solar project!",
  image: Discom,
};
const discomContent = [
  {
    title: "Understanding the Process",
    description:
      "We guide you through the DISCOM approval process, ensuring you understand all the necessary steps, from application submission to final approval.",
    image: HelpEligible,
    bgColor: "#CBFFD9",
  },
  {
    title: "Documentation Preparation",
    description:
      "Our team assists in preparing and verifying all required documents, including application forms, technical reports, and system layouts.",
    image: HelpDocument,
    bgColor: "#ABFDFF",
  },
  // {
  //   title: "Liaison with DISCOM",
  //   description:
  //     "We act as your representative, coordinating directly with DISCOM officials to address any queries, expedite approvals, and avoid unnecessary delays.",
  //   image: HelpGuidance,
  //   bgColor: "#CBFFD9",
  // },
  {
    title: "Net Metering Applications",
    description:
      "For grid-connected solar systems, we help you apply for net metering, enabling you to export excess energy to the grid and earn credits or payments.",
    image: HelpApproval,
    bgColor: "#CBFFD9",
  },
  // {
  //   title: "Compliance with Regulations",
  //   description:
  //     "Our experts ensure your solar system meets all technical and safety standards set by DISCOM, preventing potential rejections or penalties.",
  //   image: HelpTransperancy,
  //   bgColor: "#ABFDFF",
  // },
  {
    title: "End-to-End Support",
    description:
      "From application submission to approval receipt, we stay by your side, providing updates and resolving any challenges that arise during the process.",
    image: HelpApproval,
    bgColor: "#ABFDFF",
  },
];

const installationData = [
  {
    type: "Installation",
    title: "Site Assessment",
    image: Site,
    bgColor: "#CBFFD9",
    description:
      "A detailed survey of your rooftop or ground area to evaluate solar energy potential, shading, and structural integrity.",
  },
  {
    type: "Installation",
    title: "Professional Installation",
    image: Support,
    bgColor: "#ABFDFF",
    description:
      "Expert technicians install the solar panels, inverters, and other components.",
  },
  {
    type: "Installation",
    title: "System Testing",
    image: SystemTesting,
    bgColor: "#CBFFD9",
    description:
      "Comprehensive testing of the installed system to ensure it operates efficiently and meets safety and regulatory standards.",
  },
  {
    type: "Maintenance",
    title: "Customer",
    image: Customer,
    bgColor: "#ABFDFF",
    description:
      "Hands-on guidance to help you understand system operation, monitoring, and maintenance for optimal usage.",
  },
  {
    type: "Maintenance",
    title: "Routine Inspections",
    image: Routine,
    bgColor: "#CBFFD9",
    description:
      "Regular check-ups to identify potential issues and ensure the system is functioning as expected.",
  },
  {
    type: "Maintenance",
    title: "Cleaning Services",
    image: Cleaning,
    bgColor: "#ABFDFF",
    description:
      "Removal of dust, dirt, and debris from solar panels to maintain maximum energy generation.",
  },
  {
    type: "Maintenance",
    title: "Repairs and Troubleshooting",
    image: Repair,
    bgColor: "#CBFFD9",
    description:
      "Identification and resolution of issues with inverters, panels, wiring etc. minimize downtime.",
  },
  {
    type: "Maintenance",
    title: "System Upgrades",
    image: SystemUpgrade,
    bgColor: "#ABFDFF",
    description:
      "Implementation of upgrades to enhance system performance or adapt to changing energy needs.",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const carouselRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + offsetWidth < scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth, // Scroll by one full viewport
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth, // Scroll by one full viewport
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      handleScroll();
      carouselRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Box sx={{ backgroundColor: "#F2FDF5" }}>
      {/* image section */}
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
              Services
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Government Subsidy Assistance */}
      <Box
        sx={{
          padding: "20px",
          maxWidth: "90rem",
          margin: "auto",
          marginTop: "5rem",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component='h2'
          fontWeight='bold'
          gutterBottom
          mb={4}
          textAlign='center'
        >
          Government Subsidy Assistance{" "}
        </Typography>
        <Grid
          container
          spacing={4}
          direction={isMobile ? "column-reverse" : "row-reverse"}
          alignItems='start'
          justifyContent='space-between'
          sx={{ marginBottom: "40px" }}
        >
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "left",
                padding: isMobile ? "0 10px" : "0",
              }}
            >
              <Box
                component='ul'
                sx={{
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  textAlign: "left",
                }}
              >
                <Box
                  component='li'
                  sx={{
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{ marginBottom: "2.5rem", flexDirection: "left" }}
                  >
                    We understand that transitioning to solar energy is not just
                    an environmentally conscious decision but also a smart
                    financial investment. To make this transition even easier,
                    we provide comprehensive assistance in availing government
                    subsidies and incentives. Contact us today to learn more
                    about the subsidies available for your solar installation
                    and start your journey toward energy independence.
                  </Typography>
                  <Typography variant='h6' sx={{ marginBottom: "2.5rem" }}>
                    <strong>Contact us today </strong>to learn more about the
                    subsidies available for your solar installation and start
                    your journey toward energy independence.
                  </Typography>
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
              </Box>{" "}
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              alt='subsidy'
              src={Subsidy}
              sx={{
                width: "100%",
                padding: "-3rem",
                borderRadius: "30px",
                boxShadow:
                  " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Goverment schemes */}
      <Box
        sx={{
          padding: "20px",
          maxWidth: "90rem",
          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component='h2'
          fontWeight='bold'
          gutterBottom
          mb={4}
          textAlign='center'
        >
          Government Schemes
        </Typography>
        <Box>
          <Carousel
            autoPlay
            interval={5000}
            indicators={true}
            navButtonsAlwaysVisible={false}
            animation='slide'
            indicatorContainerProps={{
              style: {
                position: "relative",
                bottom: "0px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              },
            }}
            indicatorIconButtonProps={{
              style: {
                color: "grey",
                width: "20px",
                height: "40px",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: { color: "#22577A" },
            }}
          >
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  padding: "10px",
                  height: isMobile ? "50rem" : "28rem",
                  backgroundColor: item.bgColor,
                  padding: "20px",
                  borderRadius: "30px",
                  maxWidth: "62.5vw",
                  margin: "0 auto",
                  marginTop: "20px",
                  marginBottom: "3rem",
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    py: "1rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Grid
                  container
                  spacing={2}
                  direction={isMobile ? "column" : "row"}
                  alignItems='center'
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <Grid item xs={12} sm={6}>
                    <Box
                      component='img'
                      src={item.image}
                      alt={`Image for ${item.title}`}
                      sx={{
                        width: "100%",
                        height: isMobile ? "15rem" : "20rem",
                        borderRadius: "8px",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant='body1'
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "1.5",
                        textAlign: isMobile ? "center" : "left",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
      {/* Bank Finance */}
      <Box
        sx={{
          padding: "20px",
          maxWidth: "90rem",
          margin: "auto",
          marginTop: "1rem",
        }}
      >
        <Typography
          variant='h3'
          component='h2'
          fontWeight='bold'
          gutterBottom
          mb={4}
        >
          {bankService.title}{" "}
        </Typography>
        <Grid
          container
          spacing={4}
          direction={isMobile ? "column-reverse" : "row-reverse"}
          alignItems='start'
          justifyContent='space-between'
          sx={{ marginBottom: "40px" }}
        >
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "left",
                padding: isMobile ? "0 10px" : "0",
              }}
            >
              <Box
                component='ul'
                sx={{
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  textAlign: "left",
                }}
              >
                <Box
                  component='li'
                  sx={{
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      marginBottom: "2.5rem",
                      flexDirection: "left",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {bankService.description}
                  </Typography>
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
              </Box>{" "}
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              alt='subsidy'
              src={bankService.image}
              sx={{
                width: "100%",
                // padding: "0rem",
                // borderRadius: "50px",
                // boxShadow:
                //   "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* bank Finance help */}
      <Box
        sx={{
          padding: "20px",
          maxWidth: "90rem",
          margin: "auto",
          marginTop: "1rem",
          textAlign: isMobile ? "center" : "left",
        }}
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
          {bankContent.map((item, index) => (
            <Grid
              item
              key={index}
              // xs={isMobile ? 12 : 4}
              // sm={6}
              // md={4}
              // lg={4} // Adjust size for larger screens
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
      {/* Discom */}
      <Box
        sx={{
          padding: "20px",
          maxWidth: "90rem",
          margin: "auto",
          marginTop: "1rem",
        }}
      >
        <Typography
          variant='h3'
          component='h2'
          fontWeight='bold'
          gutterBottom
          mb={4}
        >
          {discomService.title}{" "}
        </Typography>
        <Grid
          container
          spacing={4}
          direction={isMobile ? "column-reverse" : "row-reverse"}
          alignItems='start'
          justifyContent='space-between'
          sx={{ marginBottom: "40px" }}
        >
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "left",
                padding: isMobile ? "0 10px" : "0",
              }}
            >
              <Box
                component='ul'
                sx={{
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  textAlign: "left",
                }}
              >
                <Box
                  component='li'
                  sx={{
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      marginBottom: "2.5rem",
                      flexDirection: "left",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {discomService.description}{" "}
                  </Typography>
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
              </Box>{" "}
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              alt='subsidy'
              src={discomService.image}
              sx={{
                width: "100%",
                // padding: "0rem",
                // borderRadius: "50px",
                // boxShadow:
                //   "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* discom help */}
      <Box
        sx={{
          padding: "20px",
          maxWidth: "90rem",
          margin: "auto",
          marginTop: "1rem",
          textAlign: isMobile ? "center" : "left",
        }}
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
          sx={{ padding: "2rem"}}
        >
          {discomContent.map((item, index) => (
            <Grid
              item
              gap={0}
              key={index}
              // xs={isMobile ? 12 : 4}
              // sm={6}
              // md={4}
              // lg={4} // Adjust size for larger screens
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
      {/* installation and maintainence */}
      <Box sx={{ maxWidth: "85vw", margin: "0 auto", textAlign: "center" }}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mb={2}
          flexDirection={isMobile ? "column" : "row"}
        >
          <Typography variant='h4' fontWeight='bold'>
            Installation and Maintenance Services
          </Typography>
          <Box sx={{ my: "1rem", alignSelf: "flex-end" }}>
            <Button
              onClick={scrollLeft}
              variant='contained'
              disabled={!canScrollLeft}
              sx={{
                backgroundColor: "#80ED99",
                width: "65px",
                height: "35px",
                margin: "auto",
                color: "#000000",
                fontWeight: "700",
                marginRight: 2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#6CCD85",
                },
              }}
            >
              <MdKeyboardArrowLeft />
            </Button>
            <Button
              variant='contained'
              onClick={scrollRight}
              disabled={!canScrollRight}
              sx={{
                backgroundColor: "#80ED99",
                width: "65px",
                height: "35px",
                margin: "auto",
                color: "#000000",
                fontWeight: "700",
                marginRight: 2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#6CCD85",
                },
              }}
            >
              <MdKeyboardArrowRight />
            </Button>
          </Box>
        </Box>
        <Box
          ref={carouselRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: 2,
            padding: 1,
          }}
        >
          {installationData.map((item, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: item.bgColor,
                width: "300px",
                flex: "0 0 auto",
                boxShadow: 2,
                borderRadius: 2,
                textAlign: "left",
              }}
            >
              <Typography
                variant='subtitle1'
                sx={{
                  textAlign: "right",
                  mx: "10px",
                  color: "#80BEBF",
                  my: "0.5rem",
                }}
              >
                {item.type}
              </Typography>
              <CardMedia
                component='img'
                // height="30"
                image={item.image}
                alt={item.title}
                sx={{
                  width: "7.5rem",
                  height: "7.5rem",
                  margin: "auto",
                }}
              />
              <CardContent>
                <Typography variant='h6' fontWeight='bold'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{item.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: "90vw",
  margin: "auto",
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "hidden",
  scrollBehavior: "smooth",
}));

const CarouselItem = styled(Box)(({ theme }) => ({
  minWidth: "250px",
  maxWidth: "250px",
  marginRight: theme.spacing(2),
  borderRadius: "0.5rem",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "150px",
  borderRadius: "0.5rem",
  marginBottom: theme.spacing(2),
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export default Services;
