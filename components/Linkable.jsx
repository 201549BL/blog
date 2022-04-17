import React from "react";
import Link from "next/link";
import { LinkableContainer } from "../styles/Linkable";

const Linkable = ({ children, href, animation }) => {
  if (String(href).startsWith("/")) {
    return (
      <Link href={href} passHref>
        <LinkableContainer animation={animation}>{children}</LinkableContainer>
      </Link>
    );
  }

  return <a href={href}>{children}</a>;
};

export default Linkable;
