import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

import TeamImage from "../assets/aboutMain.png";

import {
  Expertise,
  Commitment,
  Proven,
  Competitive,
  Tata,
  Adani,
  Waaree,
  Loom,
  ServiceArea,
  TeamExpertise,
  Maintainence,
} from "../constants/images";
import { useTranslation } from "react-i18next";

const aboutUsContent = {
  image: TeamImage,
  title: "about_us_title",
  description: "about_us_desc",
};

const whyChooseUs = [
  {
    image: Expertise,
    title: "why_choose_expertise_title",
  },
  {
    image: Commitment,
    title: "why_choose_commitment_title",
  },
  {
    image: Proven,
    title: "why_choose_proven_title",
  },
  {
    image: Competitive,
    title: "why_choose_competitive_title",
  },
];

const collaborators = [
  {
    image: Tata,
  },
  {
    image: Adani,
  },
  {
    image: Waaree,
  },
  {
    image: Loom,
  },
];
const collaboratorDescription = "collaborator_desc";
const buisnessYearDesc = "business_year_desc";

const buisnessData = [
  {
    value: "5+",
    description: "business_experience",
  },
  {
    value: "50+",
    description: "business_projects",
  },
  {
    value: "5000+",
    description: "business_capacity",
  },
  {
    value: "95%",
    description: "business_satisfaction",
  },
];

const detailFeatures = [
  {
    title: "service_area_title",
    bgColor: "#CBFFD9",
    image: ServiceArea,
    description: "service_area_desc",
  },
  {
    title: "team_expertise_title",
    bgColor: "#ABFDFF",
    image: TeamExpertise,
    description: "team_expertise_desc",
  },
];

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: "#F2FDF5" }}>
      <Box
        sx={{
          position: "relative",
          width: "100vw", // Full width
          height: isMobile ? "175px" : "300px",
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
            backgroundImage: `url(${Maintainence})`,
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
              About us
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
        sx={{
          padding: "20px",
          maxWidth: "90rem",
          margin: "auto",
          marginTop: "5rem",
        }}
      >
        <Grid
          container
          spacing={4}
          direction={isMobile ? "column-reverse" : "row"}
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
              <Typography
                variant={isMobile ? "h5" : "h4"}
                component='h2'
                fontWeight='bold'
                gutterBottom
                mb={4}
                textAlign={isMobile ? "center" : "left"}
                sx={{ whiteSpace: "pre-line" }}
              >
                {t(aboutUsContent.title)}
              </Typography>
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
                    {t(aboutUsContent.description)}
                  </Typography>
                </Box>
              </Box>{" "}
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              alt='subsidy'
              src={TeamImage}
              sx={{
                width: "100%",
                padding: "0.5rem",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Why choose */}
      <Box
        sx={{
          padding: "20px",
          maxWidth: "90rem",
          margin: "auto",
          textAlign: "center", // Center aligns text
        }}
      >
        {/* Header */}
        <Typography
          variant='h4'
          fontWeight='bold'
          gutterBottom
          mb={4}
          sx={{ display: "inline" }} // Ensures "Why choose Helioomax" stays in one line
        >
          Why choose{" "}
          <Typography
            variant='h4'
            fontWeight='bold'
            component='span' // Use span to avoid breaking into a new block
            color='#22577A'
          >
            Helioomax
          </Typography>
        </Typography>

        {/* Images and Titles */}
        <Grid container spacing={4} justifyContent='center' sx={{ mt: 4 }}>
          {whyChooseUs.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} textAlign='center'>
              <Box
                component='img'
                src={feature.image}
                alt={feature.title}
                sx={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "auto",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant='h6' fontWeight='bold'>
                {t(feature.title)}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Trusted section */}
      <Box
        sx={{
          padding: "20px",
          maxWidth: "90rem",
          margin: "auto",
          textAlign: "center", // Center aligns text
          my: "4.5rem",
        }}
      >
        {/* Header */}
        <Typography
          variant='h4'
          fontWeight='bold'
          gutterBottom
          mb={2} // Space below this Typography
        >
          Trusted By{" "}
          <Typography
            variant='h4'
            fontWeight='bold'
            component='span' // Use span to avoid breaking into a new block
            color='#22577A'
          >
            Industry Leaders,
          </Typography>
        </Typography>

        <Typography
          variant='h4'
          fontWeight='bold'
          gutterBottom
          mb={4} // Space below this Typography
        >
          Collaborating for a{" "}
          <Typography
            variant='h4'
            fontWeight='bold'
            component='span' // Use span to avoid breaking into a new block
            color='#43b3ae'
          >
            Greener Future
          </Typography>
        </Typography>
        <Box sx={{ my: "4.5rem" }}>
          <Typography variant='h6'>{t(collaboratorDescription)}</Typography>
        </Box>

        {/* Images and Titles */}
        <Grid container spacing={4} justifyContent='center' sx={{ mt: 4 }}>
          {collaborators.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} textAlign='center'>
              <Box
                component='img'
                src={feature.image}
                alt={feature.title}
                sx={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "auto",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Years in buisness */}
      <Box
        sx={{
          padding: "20px",
          maxWidth: "90rem",
          margin: "auto",
          textAlign: "center", // Center aligns text
          my: "4.5rem",
        }}
      >
        {/* Header */}
        <Typography
          variant='h4'
          fontWeight='bold'
          gutterBottom
          mb={2} // Space below this Typography
        >
          Years in Buisness{" "}
        </Typography>

        <Box sx={{ my: "4.5rem" }}>
          <Typography variant='h6' sx={{ whiteSpace: "pre-line" }}>
            {t(buisnessYearDesc)}
          </Typography>
        </Box>

        {/* Images and Titles */}
        <Grid container spacing={4} justifyContent='center' sx={{ mt: 4 }}>
          {buisnessData.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} textAlign='center'>
              <Typography variant='h3' color={"#22577A"} fontWeight='bold'>
                {t(feature.value)}
              </Typography>
              <Typography variant='h6' fontWeight='bold'>
                {t(feature.description)}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Boxes */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on larger screens
          justifyContent: "center",
          gap: 4,
          padding: "20px",
        }}
      >
        {detailFeatures.map((box, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: box.bgColor,
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "40rem",
              height: "auto",
              textAlign: "center",
            }}
          >
            {/* Title */}
            <Typography
              variant={isMobile ? "h6" : "h4"}
              fontWeight='bold'
              my={2}
            >
              {t(box.title)}
            </Typography>

            {/* Image */}
            <Box
              sx={{
                height: "20rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component='img'
                src={box.image}
                alt={box.title}
                sx={{
                  width: "100%",
                  maxWidth: isMobile ? "300px" : "25rem",
                  padding: "2rem",
                  height: "auto",
                  marginBottom: "16px",
                }}
              />
            </Box>

            {/* Description */}
            <Typography
              variant={isMobile ? "h6" : "h6"}
              sx={{ whiteSpace: "pre-line" }}
            >
              {t(box.description)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutUs;
