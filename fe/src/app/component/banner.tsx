"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import banner1 from "@/assets/images/banner.svg";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [banner1, banner1, banner1];

  const changeSlide = (index: number) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + index;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      } else if (newIndex >= images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full">
  <Image
    src={images[currentIndex]} 
    alt="banner"
    width={1000}
    height={400}
    className="object-cover"
  />

  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {images.map((_, index) => (
      <span
        key={index}
        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${
          currentIndex === index ? "bg-white" : "bg-gray-300"
        }`}
        onClick={() => goToSlide(index)}
      ></span>
    ))}
  </div>
</div>

  );
};

export default Banner;
