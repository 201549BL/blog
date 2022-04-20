import styled from "styled-components";
import { addAlpha } from "./utils/addAlpha";

const colors = {
  success: "#30c85e",
  danger: "#FF0000",
  info: "#36a3ff",
};

const aside = (color) => styled.aside`
  background-color: ${addAlpha(color, 0.1)};
  color: ${color};
  padding: 0.5rem 1rem;
  border-left: 0.2rem solid ${color};
  border-top-right-radius: var(--border-radius-sm);
  border-bottom-right-radius: var(--border-radius-sm);
`;

export const AsideFactory = (type) => {
  try {
    if (!colors.hasOwnProperty(type)) throw new Error();
    return aside(colors[type]);
  } catch (e) {
    throw new Error(
      `"${type}" is not a valid type argument in AsideFactory function`
    );
  }
};

// export const AsideFactory = (type) => {
//   switch (type) {
//     case "success":
//       return aside(colors.success);

//     case "danger":
//       return aside(colors.danger);

//     default:
//       throw new Error("No type argument was given to AsideFactory function");
//   }
// };
