import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item>
        <img
          className=" w-100 bg-img"
          src="https://i.ibb.co/Vj7wQTB/pexels-anush-gorak-1431282-1.jpg
         "
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 bg-img"
          src="
          https://i.ibb.co/bsnYWQ6/pexels-pavel-danilyuk-6295868-1.jpg
         "
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 bg-img"
          src="
         
          https://i.ibb.co/nmXqj4G/pexels-zakaria-boumliha-2827400.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
