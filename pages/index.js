import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styled from "styled-components";
import HorizontalCard from "../components/HorizontalCard";
import Head from "next/head";
import Linkable from "../components/Linkable";
import { pop } from "../styles/animations/pop";

const CenteredSection = styled.section`
  display: grid;
  margin: 0 auto;
  gap: 0.8rem;
  max-width: 60rem;
`;

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Dev blog</title>
      </Head>
      <CenteredSection>
        {posts.map((post, index) => {
          return (
            <Linkable
              key={index}
              animation={pop}
              href={path.join("/blog", post.slug)}
            >
              <HorizontalCard
                title={post.frontmatter.title}
                text={post.frontmatter.excerpt}
                src={post.frontmatter.img}
              />
            </Linkable>
          );
        })}
      </CenteredSection>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
