import React from "react";
import { AsideContainer } from "../../styles/Aside";

const colors = {
  success: "#30c85e",
  danger: "#FF0000",
  info: "#36a3ff",
};

const Aside = ({ children, type }) => {
  if (!colors[type])
    throw new Error(
      `"${type}" is not a valid type argument in AsideFactory function`
    );

  return <AsideContainer type={colors[type]}>{children}</AsideContainer>;
};

export default Aside;
