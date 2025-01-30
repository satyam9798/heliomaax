import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

import Image2 from "../assets/image1.jpeg";
import Commercial from "../assets/commercial.png";
import Residential from "../assets/residential.png";
import HowOnGrid from "../assets/howOnGrid.png";
import HowOffGrid from "../assets/howOffGrid.png";
import HowHybrid from "../assets/howHybrid.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Product = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const content = [
    {
      image: Residential,
      title: "residential_solutions",
      description: [
        "residential_solutions_desc_first",
        "residential_solutions_desc_second",
        "residential_solutions_desc_third",
      ],
      reverse: false,
    },
    {
      image: Commercial,
      title: "commercial_solutions",
      description: [
        "commercial_solutions_desc_first",
        "commercial_solutions_desc_second",
        "commercial_solutions_desc_third",
      ],
      reverse: true,
    },
  ];

  const systemTypes = [
    {
      type: "on_grid_title",
      image: HowOnGrid,
      advantages: [
        "on_grid_adv_first",
        "on_grid_adv_second",
        "on_grid_adv_third",
        "on_grid_adv_fourth",
      ],
    },
    {
      type: "off_grid_title",
      image: HowOffGrid,
      advantages: [
        "off_grid_adv_first",
        "off_grid_adv_second",
        "off_grid_adv_third",
        "off_grid_adv_fourth",
      ],
    },
    {
      type: "hybrid_grid_title",
      image: HowHybrid,
      advantages: [
        "hybrid_grid_adv_first",
        "hybrid_grid_adv_second",
        "hybrid_grid_adv_third",
        "hybrid_grid_adv_fourth",
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F2FDF5",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
     
      <Box
        sx={{
          position: "relative",
          width: "100vw", // Full width
          height: isMobile? '175px' : "300px",
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
              Products
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

      <Box sx={{ width: "100vw" }}>
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
          >
            {t('rooftop_solar_installation')}
          </Typography>
          {content.map((item, index) => (
            <Grid
              container
              spacing={4}
              key={index}
              direction={
                isMobile
                  ? "column-reverse"
                  : item.reverse
                  ? "row"
                  : "row-reverse"
              }
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
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {t(item.title)}
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
                    {item.description.map((desc, idx) => (
                      <Box
                        component='li'
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <Typography
                          variant='body1'
                          sx={{
                            fontWeight: "bold",
                            marginRight: "8px",
                            color: "#22577A",
                          }}
                        >
                          {idx + 1}.
                        </Typography>
                        <Typography variant='h6'>{t(desc)}</Typography>
                      </Box>
                    ))}
                  </Box>{" "}
                </Box>
              </Grid>

              {/* Image Section */}
              <Grid item xs={12} md={6}>
                <Box
                  component='img'
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    padding: "-3rem",
                    borderRadius: "10px",
                    // boxShadow: " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
                  }}
                />
              </Grid>
            </Grid>
          ))}
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
                {t('tab_quote_secondary')}
              </Typography>
              <Typography
                variant={isMobile ? "body1" : "h6"}
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "white",
                  textAlign: "left",
                }}
              >
                {t('tab_quote_primary')}
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
              href="/get-quote"
            >
              {t('get_quote')} <MdKeyboardArrowRight />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "80vw",
            maxWidth: "80vw",
            // margin:isMobile?'0': "auto",
            padding: isMobile ? "0" : "20px",
          }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              marginBottom: "40px",
              my: "1rem",
              mx: "1rem",
            }}
          >
            {('system_types')}
          </Typography>

          {systemTypes.map((system, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: "40px",
                maxWidth: "80rem",
              }}
            >
              <Box sx={{ margin: "auto" }}>
                {/* Subheader */}
                <Typography
                  variant='h5'
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    margin: "auto",
                    px: "0.5rem",
                  }}
                >
                  {t(system.type)}
                </Typography>

                <Grid
                  // container
                  spacing={4}
                  direction='column'
                  alignItems='center'
                  justifyContent='center'
                  sx={{ width: "100vw" }}
                >
                  {/* Image Section */}
                  <Grid item xs={6} sx={{ display: "flex", px: "2rem" }}>
                    <Box
                      component='img'
                      src={system.image}
                      alt={`${system.type} Image`}
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                        maxWidth: isMobile ? "95rem" : "55rem",
                        margin: "auto",
                      }}
                    />
                  </Grid>

                  {/* Advantages Section */}
                  <Grid item xs={6} sx={{ px: "0.2rem" }}>
                    <Box
                      sx={{
                        width: "100vw",
                        px: "0.5rem",
                        // padding: "20px",
                      }}
                    >
                      <Typography
                        variant={isMobile ? "body1" : "h4"}
                        sx={{
                          fontWeight: "bold",
                          marginBottom: "10px",
                        }}
                      >
                        {t('advantages')}
                      </Typography>
                      <Box
                        component='ul'
                        sx={{
                          listStyleType: "none",
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        <List>
                          {system.advantages.map((advantage, idx) => (
                            <ListItem>
                              <ListItemText primary={t(advantage)} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                  </Grid>
                  {/* Decorative Divider */}
                  {index === systemTypes.length - 2 && (
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
                        px: "0.5rem",
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
                            variant={isMobile ? "body1" : "h6"}
                            sx={{
                              fontWeight: "bold",
                              marginBottom: "10px",
                              color: "white",
                              textAlign: "left",
                            }}
                          >
                            {t('tab_quote_secondary')}
                          </Typography>
                          <Typography
                            variant={isMobile ? "body1" : "h6"}
                            sx={{
                              fontWeight: "bold",
                              marginBottom: "10px",
                              color: "white",
                              textAlign: "left",
                            }}
                          >
                            {t('tab_quote_primary')}
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
                            marginRight: "10px",
                            color: "#000000",
                            fontWeight: "700",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#6CCD85",
                            },
                          }}
                          href="/get-quote"
                        >
                          {t('get_quote')} <MdKeyboardArrowRight />
                        </Button>
                      </Box>
                    </Box>
                  )}
                </Grid>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
