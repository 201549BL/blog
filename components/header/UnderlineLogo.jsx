import styled from "styled-components";

export const Logo = styled.h1`
  text-transform: uppercase;
  cursor: pointer;
`;

const UnderlineLogo = () => {
  return (
    <Logo>
      E<small>irik</small>
      <sup> B</sup>
    </Logo>
  );
};

export default UnderlineLogo;
