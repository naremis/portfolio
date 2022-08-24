import React, { useState } from "react";
import Image from "next/image";
import { SERVICES_CONTENT } from "./constants";
import EmblaCarousel from "../components/EmbalaCarousel";

const getPreviousIndex = (currentIndex) => {
  return SERVICES_CONTENT[
    (currentIndex + SERVICES_CONTENT.length - 1) % SERVICES_CONTENT.length
  ];
};
const getNextIndex = (currentIndex) => {
  return SERVICES_CONTENT[(currentIndex + 1) % SERVICES_CONTENT.length];
};
const SLIDE_COUNT = 6;

const slides = Array.from(Array(SLIDE_COUNT).keys());

console.log("slides", slides);

const ServicesCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="table relative w-full bg-gray-100 px-4 py-20 text-center  ">
      <div className="pb-12 opacity-70">
        <h1 className=" pb-4 text-4xl font-semibold ">Services</h1>
        <p className=" text-lg	  ">
          We provide the best in class services for our customer
        </p>
      </div>
      <div className="block">
        <EmblaCarousel slides={slides} />
      </div>
    </section>
  );
};
export default ServicesCarousel;
