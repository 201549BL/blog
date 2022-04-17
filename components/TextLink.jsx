import React from "react";
import Link from "next/link";

const TextLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  );
};

export default TextLink;
