import {
  HorizontalCardContainer,
  ImageContainer,
  ImageWrapper,
  TextContainer,
} from "../styles/HorizontalCard";

import React from "react";
import Image from "next/image";

const HorizontalCard = ({ src, title, text }) => {
  return (
    <HorizontalCardContainer>
      <ImageWrapper>
        <Image src={src} layout="fill" objectFit="cover" alt="imgname" />
      </ImageWrapper>
      <TextContainer>
        <h1>{title}</h1>
        <p>{text}</p>
      </TextContainer>
    </HorizontalCardContainer>
  );
};

export default HorizontalCard;
