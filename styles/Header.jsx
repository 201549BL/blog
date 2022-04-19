import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 60rem;
  padding: 1rem;
  margin: 0 auto;

  height: fit-content;
  min-height: 3rem;
  background: ${({ theme }) => theme?.colors?.body ?? "var(--color-body)"};
  /* outline: 1px solid red; */
  margin-bottom: 2rem;
`;
