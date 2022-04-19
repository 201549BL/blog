import { css } from "styled-components";

const smallBoxShadow = css`
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
`;
const mediumBoxShadow = css`
  box-shadow: 0px 8px 17px 2px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);
`;
const largeBoxShadow = css`
  box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 11px 15px -7px rgba(0, 0, 0, 0.2);
`;

export const boxShadow = (size) => {
  switch (size) {
    case "sm":
      return smallBoxShadow;

    case "md":
      return mediumBoxShadow;

    case "lg":
      return largeBoxShadow;

    default:
      throw Error("No argument given to boxShadow function");
  }
};
