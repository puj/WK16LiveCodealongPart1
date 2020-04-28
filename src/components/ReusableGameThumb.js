/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ReusableGameThumb = ({
  href,
  name,
  description,
  background_image,
  size
}) => {
  const Thumb = styled.main`
    width: ${size || "200px"};
    height: ${size || "200px"};
    display: flex;
    flex-flow: column;
    background-color: #efefef;
    align-items: center;
    margin: 12px;
  `;
  const ThumbImageWrapper = styled.div`
    padding: 10%;
    width: 80%;
    height: 80%;
    position: relative;
  `;
  const ThumbImage = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
    webkit-transition: opacity 0.4s ease-in-out;
    -moz-transition: opacity 0.4s ease-in-out;
    -o-transition: opacity 0.4s ease-in-out;
    transition: opacity 0.4s ease-in-out;
    background-color: #efefef;
    ${ThumbImageWrapper}:hover & {
      visibility: visible;
      opacity: 0.2;
    }
  `;
  const ThumbDescription = styled.p`
    /* Needed for the overlay  */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    /* Center the content vertically */
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    /*  Center the content horizontally */
    text-align: center;

    /* Other styling */
    color: #000;
    font-size: 32px;

    /* Start as invisible */
    visibility: hidden;
    opacity: 0;

    /* Specify the animation time */
    webkit-transition: opacity 0.3s ease-in-out;
    -moz-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;

    ${ThumbImageWrapper}:hover & {
      visibility: visible;
      opacity: 1;
    }
  `;
  return (
    <Link to={href}>
      <Thumb>
        {name}
        <ThumbImageWrapper>
          <ThumbImage src={background_image} alt={name} />
          <ThumbDescription>{description}</ThumbDescription>
        </ThumbImageWrapper>
      </Thumb>
    </Link>
  );
};
