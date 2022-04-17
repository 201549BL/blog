import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) =>
    theme?.colors?.primary ?? "var(--color-primary)"};
  color: ${({ theme }) => theme?.colors?.primaryFont ?? "var(--color-font)"};

  padding: 0.5rem 1.5rem;
  border-radius: 15px;

  transition: font 0 ease;
  transition: background-color 100ms ease;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.colors?.primarySelected ?? "var(--color-primary-selected)"};
  }
`;
