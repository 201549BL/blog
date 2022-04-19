import styled from "styled-components";
import { spacer } from "./utils/spacer";
import { dracula } from "./highlight/dracula.jsx";

export const PostContainer = styled.article`
  padding: 2rem;

  background-color: ${({ theme }) =>
    theme?.colors?.background ?? "var(--color-background)"};

  border-radius: var(--border-radius-md);

  ${spacer()}

  ${dracula}
`;
