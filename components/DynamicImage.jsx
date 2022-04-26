import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { boxShadow } from "../styles/utils/boxShadow";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/2;
  border-radius: var(--border-radius-sm);
  ${boxShadow("md")};
  overflow: hidden;
`;

const DynamicImage = ({ src }) => {
  return (
    <ImageWrapper>
      <Image src={src} layout={"fill"} alt={"alttxt"} objectFit={"cover"} />
    </ImageWrapper>
  );
};

export default DynamicImage;
