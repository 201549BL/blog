import styled from "styled-components";
import { boxShadow } from "./utils/boxShadow";

export const HorizontalCardContainer = styled.article`
  height: auto;
  width: 100%;
  background-color: ${({ theme }) =>
    theme?.colors?.background ?? "var(--color-background)"};
  border: 0.1rem solid ${({ theme }) => theme?.colors?.border};

  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: var(--border-radius-md);
  color: ${({ theme }) => theme?.colors?.font ?? "var(--color-font)"};

  ${boxShadow("md")}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  border: 0.5rem solid transparent;
  border-radius: 1rem;
`;

export const TextContainer = styled.div`
  margin: 1rem;

  & > *:not(:last-child) {
    margin-bottom: var(--global-margin-size-small);
  }
`;
