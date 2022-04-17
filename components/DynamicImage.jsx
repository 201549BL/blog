import styled from "styled-components";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
`;

const DynamicImage = (props) => {
  return (
    <ImageContainer>
      <ExportedImage
        src={props.src}
        title={props.title}
        alt={props.alt}
        layout={"responsive"}
        width={"16"}
        height={"10"}
        objectFit={"cover"}
      />
    </ImageContainer>
  );
};

export default DynamicImage;
