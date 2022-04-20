import React from "react";
import { AsideFactory } from "../../styles/Aside";

const Aside = ({ children, type }) => {
  const AsideContainer = AsideFactory(type);

  return <AsideContainer>{children}</AsideContainer>;
};

export default Aside;
