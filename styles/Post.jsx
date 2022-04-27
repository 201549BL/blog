import styled from "styled-components";
import { spacer } from "./utils/spacer";
import { dracula } from "./highlight/dracula.jsx";
import { boxShadow } from "./utils/boxShadow";

export const PostContainer = styled.article`
  position: relative;
  display: grid;

  grid-template-columns: repeat(12, 1fr);

  width: 100%;
  max-width: 70rem;

  gap: 1rem;
  margin: 0 auto;

  header {
    grid-row: 1;
    grid-column: 1 / -1;

    @media (min-width: 32rem) {
      grid-column: 2 / 12;
    }

    @media (min-width: 70rem) {
      grid-column: 10 / -1;
    }
  }
`;
