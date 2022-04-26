import React from "react";
import Link from "next/link";
import { LinkableContainer } from "../../styles/Linkable";
import { underline } from "../../styles/animations/underline";
import { useTheme } from "styled-components";

const PostLink = ({ children, href, animation }) => {
  const theme = useTheme();

  if (String(href).startsWith("/") || String(href).startsWith("#")) {
    return (
      <Link href={href} passHref>
        <LinkableContainer
          as={"a"}
          animation={() => underline(theme?.colors?.primary)}
        >
          {children}
        </LinkableContainer>
      </Link>
    );
  }

  return (
    <LinkableContainer
      as={"a"}
      href={href}
      animation={() => underline(theme?.colors?.primary)}
      target="_blank"
      rel="noopener noreferrer"
      nowrap
    >
      {children}
    </LinkableContainer>
  );
};

export default PostLink;
