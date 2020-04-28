/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const GameThumb = ({
  href,
  name,
  description,
  background_image,
  size
}) => {
  const Thumb = styled.main`
    width: ${size || "auto"};
    height: ${size || "auto"};
  `;
  return (
    <Link to={href}>
      {name}
      <Thumb className="game-thumb">
        <div className="game-thumb-image-wrapper">
          <img className="game-thumb-image" src={background_image} alt={name} />
          <p className="game-thumb-image-description">{description}</p>
        </div>
      </Thumb>
    </Link>
  );
};
