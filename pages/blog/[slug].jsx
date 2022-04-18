import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import rehypeHighlight from "rehype-highlight";
import { PostContainer } from "../../styles/Post";

const components = {
  Image,
};

export default function PostPage({ data, source }) {
  return (
    <PostContainer>
      <MDXRemote {...source} components={components} />
    </PostContainer>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data, content } = matter(markdownWithMeta);
  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  console.log(source);

  return {
    props: {
      data,
      source,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".mdx", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}
