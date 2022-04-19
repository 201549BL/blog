import React from "react";
import Link from "next/link";
import { LinkableContainer } from "../../styles/Linkable";

const PostLink = ({ children, href, animation }) => {
  if (String(href).startsWith("/")) {
    return (
      <Link href={href} passHref>
        <LinkableContainer as={"a"} animation={animation}>
          {children}
        </LinkableContainer>
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default PostLink;
