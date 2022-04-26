import styled from "styled-components";
import { addAlpha } from "./utils/addAlpha";

export const AsideContainer = styled.aside`
  background-color: ${({ type }) => addAlpha(type, 0.1)};
  color: ${({ type }) => type};
  padding: 0.5rem 1rem;
  border-left: 0.2rem solid ${({ type }) => type};
  border-top-right-radius: var(--border-radius-sm);
  border-bottom-right-radius: var(--border-radius-sm);
`;
