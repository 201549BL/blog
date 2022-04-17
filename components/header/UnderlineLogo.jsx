import styled from "styled-components";
import { underline } from "../../styles/animations/underline";

export const Logo = styled.h1`
  text-transform: uppercase;
  cursor: pointer;
`;

const UnderlineLogo = () => {
  return (
    <Logo underline>
      E<small>irik</small>
      <sup> B</sup>
    </Logo>
  );
};

export default UnderlineLogo;
