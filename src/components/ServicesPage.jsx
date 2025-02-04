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
import { styled } from "@mui/material/styles";

import Kusum from "../assets/kusumYojana.png";
import Bijli from "../assets/muftBijli.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Bank from "../assets/bank.png";
import HelpEligible from "../assets/helpElegibile.png";
import HelpDocument from "../assets/helpDocument.png";
import HelpApproval from "../assets/helpApproval.png";
import HelpGuidance from "../assets/helpGuidance.png";
import Site from "../assets/siteAsessment.png";
import Support from "../assets/support.png";
import SystemTesting from "../assets/systemTesting.png";
import Customer from "../assets/customer.png";
import Routine from "../assets/routine.png";
import Cleaning from "../assets/cleaning.png";
import Repair from "../assets/repair.png";
import SystemUpgrade from "../assets/systemUpgrade.png";
import {
  PmKusumYojana,
  SolarEnergy,
  SolarPanel,
  SubsidyGov,
} from "../constants/images.js";
import { useTranslation } from "react-i18next";

const items = [
  {
    title: "component_a_scheme_title",
    description: "component_a_scheme_desc",
    image: Kusum,
    bgColor: "#ABFDFF",
  },
  {
    title: "component_b_scheme_title",
    description: "component_b_scheme_desc",
    image: PmKusumYojana,
    bgColor: "#CBFFD9",
  },
  {
    title: "surya_yojana_scheme_title",
    description: "surya_yojana_scheme_desc",
    image: Bijli,
    bgColor: "#ABFDFF",
  },
];

const bankService = {
  title: "bank_finance_title",
  description: "bank_finance_desc",
  image: Bank,
  bgColor: "#CBFFD9",
};
const bankContent = [
  {
    title: "bank_flexible_financing_title",
    description: "bank_flexible_financing_desc",
    image: HelpGuidance,
    bgColor: "#CBFFD9",
  },
  {
    title: "bank_loan_eligibility_title",
    description: "bank_loan_eligibility_desc",
    image: HelpEligible,
    bgColor: "#ABFDFF",
  },
  {
    title: "bank_documentation_support_title",
    description: "bank_documentation_support_desc",
    image: HelpDocument,
    bgColor: "#CBFFD9",
  },
  {
    title: "bank_expedited_approvals_title",
    description: "bank_expedited_approvals_desc",
    image: HelpApproval,
    bgColor: "#ABFDFF",
  },
];

const discomService = {
  title: "discom_approval_support_title",
  description: "discom_approval_support_desc",
  image: SolarEnergy,
};

const discomContent = [
  {
    title: "discom_understanding_process_title",
    description: "discom_understanding_process_desc",
    image: HelpEligible,
    bgColor: "#CBFFD9",
  },
  {
    title: "discom_documentation_preparation_title",
    description: "discom_documentation_preparation_desc",
    image: HelpDocument,
    bgColor: "#ABFDFF",
  },
  {
    title: "discom_net_metering_title",
    description: "discom_net_metering_desc",
    image: HelpApproval,
    bgColor: "#CBFFD9",
  },
  {
    title: "discom_end_to_end_support_title",
    description: "discom_end_to_end_support_desc",
    image: HelpApproval,
    bgColor: "#ABFDFF",
  },
];

const installationData = [
  {
    type: "Installation",
    title: "installation_site_assessment_title",
    description: "installation_site_assessment_desc",
    image: Site,
    bgColor: "#CBFFD9",
  },
  {
    type: "Installation",
    title: "installation_professional_installation_title",
    description: "installation_professional_installation_desc",
    image: Support,
    bgColor: "#ABFDFF",
  },
  {
    type: "Installation",
    title: "installation_system_testing_title",
    description: "installation_system_testing_desc",
    image: SystemTesting,
    bgColor: "#CBFFD9",
  },
  {
    type: "Maintenance",
    title: "maintenance_customer_title",
    description: "maintenance_customer_desc",
    image: Customer,
    bgColor: "#ABFDFF",
  },
  {
    type: "Maintenance",
    title: "maintenance_routine_inspections_title",
    description: "maintenance_routine_inspections_desc",
    image: Routine,
    bgColor: "#CBFFD9",
  },
  {
    type: "Maintenance",
    title: "maintenance_cleaning_services_title",
    description: "maintenance_cleaning_services_desc",
    image: Cleaning,
    bgColor: "#ABFDFF",
  },
  {
    type: "Maintenance",
    title: "maintenance_repairs_troubleshooting_title",
    description: "maintenance_repairs_troubleshooting_desc",
    image: Repair,
    bgColor: "#CBFFD9",
  },
  {
    type: "Maintenance",
    title: "maintenance_system_upgrades_title",
    description: "maintenance_system_upgrades_desc",
    image: SystemUpgrade,
    bgColor: "#ABFDFF",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

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
    <Box
      sx={{
        backgroundColor: "#F2FDF5",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
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
            backgroundImage: `url(${SolarPanel})`,
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
              Services
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
          {t("government_subsidy_assistance")}{" "}
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
                    {t("government_subsidy_assistance_desc")}
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
                    href='/get-quote'
                  >
                    {t("get_quote")}
                    <MdKeyboardArrowRight />
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
              src={SubsidyGov}
              sx={{
                width: "100%",
                maxHeight: "25rem",
                // padding: "-3rem",
                borderRadius: "20px",
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
          {t("goverment_schemes")}
        </Typography>
        <Box>
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                padding: "10px",
                // height: isMobile ? "52.5rem" : "28rem",
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
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  py: "1rem",
                }}
              >
                {t(item.title)}
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
                    variant='h6'
                    sx={{
                      // fontSize: "1rem",
                      lineHeight: "1.5",
                      textAlign: isMobile ? "center" : "left",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {t(item.description)}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
          {/* </Carousel> */}
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
          variant={isMobile ? "h4" : "h3"}
          component='h2'
          fontWeight='bold'
          gutterBottom
          mb={4}
          textAlign={"center"}
        >
          {t(bankService.title)}{" "}
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
                    {t(bankService.description)}
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
                    href='/get-quote'
                  >
                    {t("get_quote")} <MdKeyboardArrowRight />
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
          {t("home_help_title")}{" "}
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
          variant={isMobile ? "h4" : "h3"}
          textAlign={isMobile ? "center" : "left"}
          component='h2'
          fontWeight='bold'
          gutterBottom
          mb={4}
        >
          {t(discomService.title)}{" "}
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
                    {t(discomService.description)}{" "}
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
                    href='/get-quote'
                  >
                    {t("get_quote")} <MdKeyboardArrowRight />
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
                borderRadius: "30px",
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
          {t("home_help_title")}{" "}
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent='center'
          alignItems='center'
          sx={{ padding: "2rem" }}
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
            {t("installation_and_maintenance_services")}
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
                {t(item.type)}
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
                  {t(item.title)}
                </Typography>
                <Typography variant='body2'>{t(item.description)}</Typography>
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
