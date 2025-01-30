import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

import Image2 from "../assets/image1.jpeg";
import TeamImage from "../assets/aboutMain.png";
import { MdKeyboardArrowRight } from "react-icons/md";

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

const aboutUsContent = {
  image: TeamImage,
  title: "Empowering the Future with Sustainable Energy",
  description:
    "We are dedicated to transforming how energy is consumed by making renewable energy accessible and affordable. Since our inception, we've been at the forefront of the solar energy revolution, empowering homes, businesses, and industries with innovative solar solutions. \n \n Our mission is to create a sustainable future by reducing dependence on non-renewable resources while enabling our customers to save on energy costs. With a strong commitment to excellence, we pride ourselves on delivering high-quality installations, exceptional service, and long-lasting value.",
};

const whyChooseUs = [
  {
    image: Expertise,
    title: "Expertise in Sustainable Energy Solutions",
  },
  {
    image: Commitment,
    title: "Commitment to Quality and Customer Satisfaction",
  },
  {
    image: Proven,
    title: "Proven Track Record of Successful Installations",
  },
  {
    image: Competitive,
    title: "Competitive Pricing and Government Scheme Benefits",
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
const collaboratorDescription =
  "We are proud to collaborate with leading companies in the solar energy industry, including top manufacturers, technology providers, and financial institutions. These partnerships enable us to deliver innovative and reliable solutions tailored to our customer's needs. By combining our expertise with the resources and experience of our partners, we ensure every project meets the highest standards of quality, efficiency, and sustainability";

const buisnessYearDesc =
  "Although we are a new company, we bring a wealth of experience through successful collaborations with established solar energy providers. Our team has played a key role in completing numerous projects, ranging from residential installations to large-scale commercial and industrial systems. \n \n By leveraging our partnerships and expertise, we've quickly built a reputation for delivering reliable, high-quality solar energy solutions that meet diverse client needs.";

const buisnessData = [
  {
    value: "5+",
    description: "Years of Collective Experience",
  },
  {
    value: "50+",
    description: "Projects Completed Through Collaborations",
  },
  {
    value: "5000+",
    description: "kW Solar Capacity Installed",
  },
  {
    value: "95%",
    description: "Customer Satisfaction Rate",
  },
];

const detailFeatures = [
  {
    title: "Service Area Coverage",
    bgColor: "#CBFFD9",
    image: ServiceArea,
    description: `We are proud to serve customers across <b> 15+ states</b>, ensuring access to premium solar solutions no matter where you are. 

      Whether it's a rural residence, a bustling city office, or a large industrial plant, our team delivers tailored solutions to meet your unique needs.`,
  },
  {
    title: "Team Expertise",
    bgColor: "#ABFDFF",
    image: TeamExpertise,
    description: `Our team of <b>certified professionals</b> brings together decades of experience in solar technology, energy efficiency, and project management. 
      From expert engineers to skilled technicians, every member of our team is dedicated to ensuring the seamless installation and maintenance of your solar system.`,
  },
];

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#F2FDF5" }}>
      <Box
        sx={{
          position: "relative",
          width: "100vw", // Full width
          height: isMobile? '175px' : "300px",
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
            height: isMobile?'35px': "80px",
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
                sx={{whiteSpace:'pre-line'}}
              >
                {aboutUsContent.title}
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
                    sx={{ marginBottom: "2.5rem", flexDirection: "left", whiteSpace:'pre-line' }}
                  >
                    {aboutUsContent.description}
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
                {feature.title}
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
          <Typography variant='h6'>{collaboratorDescription}</Typography>
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
            {buisnessYearDesc}
          </Typography>
        </Box>

        {/* Images and Titles */}
        <Grid container spacing={4} justifyContent='center' sx={{ mt: 4 }}>
          {buisnessData.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} textAlign='center'>
              <Typography variant='h3' color={"#22577A"} fontWeight='bold'>
                {feature.value}
              </Typography>
              <Typography variant='h6' fontWeight='bold'>
                {feature.description}
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
              {box.title}
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
              dangerouslySetInnerHTML={{ __html: box.description }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutUs;
