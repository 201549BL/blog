import React, { useState, useEffect } from "react";

import { PostContainer } from "../../styles/Post";

const Post = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return isMounted ? <PostContainer>{children}</PostContainer> : null;
};

export default Post;
