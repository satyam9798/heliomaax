import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";

import "../styles/Home.css";
import Image1 from "../assets/image1.jpeg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/waterFarmer.jpg";

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
    description: "Goverment Scheme that aims to provide free electricity to households in India.",
  },
  {
    image: Image4,
    title: "PM Kusum 'B' Yojana",
    description: "Mukhyamantri Solar Pump Yojana.",
  },
];

export default function Home() {
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
    </div>
  );
}
const style = {
  carouselButton: {
    backgroundColor: "#80ED99",
    color: "#000000",
    fontWeight: "600",
  },
  carouselHeader:{
    fontSize:60
  },
  carouselDescription:{
    fontSize:30
  },
};
