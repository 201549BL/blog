import styled from "styled-components";
import { spacer } from "./utils/spacer";
import { dracula } from "./highlight/dracula.jsx";
import { boxShadow } from "./utils/boxShadow";

export const PostContainer = styled.article`
  padding: 2rem;
  margin-bottom: 10rem;

  background-color: ${({ theme }) =>
    theme?.colors?.background ?? "var(--color-background)"};

  border: 0.1rem solid ${({ theme }) => theme?.colors?.border};
  border-radius: var(--border-radius-md);
  ${boxShadow("lg")}

  ${spacer()};
  ${dracula};
`;
