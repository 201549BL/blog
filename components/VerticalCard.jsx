import React from "react";
import Image from "next/image";
import {
  VerticalCardContainer,
  ContentContainer,
  ImageContainer,
} from "../styles/VerticalCard";
import { Button } from "../styles/Buttons";

const VerticalCard = ({ src, title, text }) => {
  return (
    <VerticalCardContainer>
      <ImageContainer>
        <Image alt="Building" layout="fill" src={src} objectFit="cover" />
      </ImageContainer>
      <ContentContainer>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button>Hello</Button>
      </ContentContainer>
    </VerticalCardContainer>
  );
};

export default VerticalCard;
