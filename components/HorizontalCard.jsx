import {
  HorizontalCardContainer,
  ImageContainer,
  ImageWrapper,
  TextContainer,
} from "../styles/HorizontalCard";

import React from "react";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

const HorizontalCard = ({ src, title, text }) => {
  return (
    <HorizontalCardContainer>
      <ImageWrapper>
        <ExportedImage
          src={src}
          layout="fill"
          objectFit="cover"
          alt="imgname"
        />
      </ImageWrapper>
      <TextContainer>
        <h1>{title}</h1>
        <p>{text}</p>
      </TextContainer>
    </HorizontalCardContainer>
  );
};

export default HorizontalCard;
