import styled from "styled-components";
import { boxShadow } from "./utils/boxShadow";

export const Button = styled.button`
  border: 0.1rem solid ${({ theme }) => theme?.colors?.border};
  background-color: ${({ theme }) =>
    theme?.colors?.background ?? "var(--color-primary)"};
  color: ${({ theme }) => theme?.colors?.primaryFont ?? "var(--color-font)"};

  padding: 0.5rem 1.5rem;

  border-radius: var(--border-radius-md);

  transition: font 0 ease;
  transition: background-color 100ms ease;

  ${boxShadow("md")}

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.colors?.primarySelected ?? "var(--color-primary-selected)"};
    border: 0.1rem solid
      ${({ theme }) =>
        theme?.colors?.primarySelected ?? "var(--color-primary-selected)"};
  }
`;

export const HollowButton = styled(Button)`
  background-color: transparent;
`;
