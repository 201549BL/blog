import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  aspect-ratio: 3/2;
`;

const DynamicImage = ({ src }) => {
  return (
    <ImageWrapper>
      <Image src={src} layout={"fill"} alt={"alttxt"} objectFit={"cover"} />
    </ImageWrapper>
  );
};

export default DynamicImage;
