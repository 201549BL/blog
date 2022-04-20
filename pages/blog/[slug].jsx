import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import { PostContainer } from "../../styles/Post";
import DynamicImage from "../../components/DynamicImage";
import PostLink from "../../components/posts/PostLink";
import Head from "next/head";
import Aside from "../../components/posts/Aside";

const components = {
  img: DynamicImage,
  a: PostLink,
  Aside,
};

export default function PostPage({ data, source }) {
  return (
    <PostContainer>
      <Head>
        <title>{data.title}</title>
      </Head>
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
