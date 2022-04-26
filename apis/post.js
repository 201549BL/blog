import fs from "fs";
import path from "path";

export const getAllPosts = () => {
  const posts = fs.readdirSync("posts");

  return posts;
};
