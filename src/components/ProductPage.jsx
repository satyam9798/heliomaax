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

const Product = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const content = [
    {
      image: Residential,
      title: "Residential Solutions",
      description: [
        "Customized solutions for homes: We design systems tailored to your energy needs and rooftop specifications.",
        "Seamless Installation: Our team of certified experts ensures a hassle-free installation process.",
        "Energy savings and efficiency: Pair your rooftop solar with advanced battery solutions to store excess energy and stay powered even during outages.",
      ],
      reverse: false,
    },
    {
      image: Commercial,
      title: "Commercial solutions",
      description: [
        "Scalable Installation: Our modular systems allow you to expand your energy capacity as your business grows",
        "Reduce Operational Cost: Reduce your business’s operating expenses by cutting down on electricity costs.",
        "Improved Sustainability: Switching to solar energy helps your business reduce its carbon footprint and achieve green certifications.",
      ],
      reverse: true,
    },
  ];

  const systemTypes = [
    {
      type: "On-Grid",
      image: HowOnGrid,
      advantages: [
        "Uninterrupted power: The utility grid ensures an uninterrupted power supply, even when solar energy production fluctuates ",
        "Cost-effective: On-grid systems don't require an energy storage battery, which makes them more cost-effective and easier to maintain ",
        "High returns: On-grid systems can save money over time, and many homeowners prefer them due to their flexibility and net metering returns",
        "Net Metering Benefits: Earn credits or payments by sending your unused solar energy back to the grid. Our systems are net-metering ready!",
      ],
    },
    {
      type: "Off-Grid",
      image: HowOffGrid,
      advantages: [
        "Self-sufficient: Off-grid systems are designed to be entirely self-sufficient, meaning they don't require support from the public electricity grid. ",
        "Sustainable: Solar energy is a sustainable and environmentally friendly form of green energy. ",
        "Low operating costs: Off-grid systems can have low operating costs and reduced maintenance. ",
        "Lithium batteries: Lithium batteries are becoming more popular in off-grid systems because they are cheaper and last longer than lead acid batteries. ",
      ],
    },
    {
      type: "Hybrid",
      image: HowHybrid,
      advantages: [
        "Energy independence: Reduces reliance on the grid by utilizing stored solar energy. ",
        "Backup power: Provides electricity during power outages due to battery storage. ",
        "Cost savings: Can potentially lower electricity bills by utilizing solar power during peak usage hours. ",
        "Grid stability: Can help stabilize the grid by feeding excess solar power back in. ",
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#F2FDF5" }}>
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
              Products
            </Typography>
          </Box>
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
            variant={isMobile? 'h4': 'h3'}
            component='h2'
            fontWeight='bold'
            gutterBottom
            mb={4}
          >
            Rooftop solar Installation
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
                    variant={isMobile? 'h5': 'h4'}
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
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
                        <Typography variant='h6'>{desc}</Typography>
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
                variant={isMobile? 'body1': 'h6'}
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
                variant={isMobile? 'body1': 'h6'}
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
              my:'1rem',
              mx:'1rem'
            }}
          >
            System Types
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
                    px:'0.5rem'
                  }}
                >
                  {system.type}
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
                        px:'0.5rem'
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
                        Advantages
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
                              <ListItemText
                                primary={advantage}
                              />
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
                        px:'0.5rem'
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
                            variant={isMobile? 'body1': 'h6'}
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
                            variant={isMobile? 'body1': 'h6'}
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
                            marginRight:'10px',
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
