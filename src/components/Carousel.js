import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

// Import arrow images
const leftArrow = "/assets/left-arrow.svg";
const rightArrow = "/assets/right-arrow.svg";

const images = [
  "/assets/bg1.png",
  "/assets/bg2.png",
  "/assets/bg3.png",
  "/assets/bg4.png",
  "/assets/bg5.png",
];

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick}>
    <img src={leftArrow} alt="Previous" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick}>
    <img src={rightArrow} alt="Next" />
  </div>
);

const Carousel = () => {
  const [centerIndex, setCenterIndex] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (_, next) => setCenterIndex(next),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === centerIndex ? "active" : ""
            }`}
          >
            {" "}
            <CenteredWrapper>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            </CenteredWrapper>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
