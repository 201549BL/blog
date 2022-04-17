import styled from "styled-components";

export const VerticalCardContainer = styled.article`
  width: 100%;
  max-height: 500px;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) =>
    theme?.colors?.background ?? "var(--color-background)"};
  color: ${({ theme }) => theme?.colors?.font ?? "var(--color-font)"};
  border-radius: 15px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 30vh;

  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  overflow: hidden;
  position: relative;
`;

export const ContentContainer = styled.div`
  margin: 1.5rem;

  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  button {
    align-self: flex-start;
  }
`;
