import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import DynamicImage from "../../components/DynamicImage";
import Post from "../../components/posts/Post";
import SyntaxHighlighter from "../../components/SyntaxHighlighter";
import remarkUnwrapImages from "remark-unwrap-images";
import Linkable from "../../components/Linkable";

const components = {
  img: DynamicImage,
  code: SyntaxHighlighter,
  a: Linkable,
};

const PostPage = ({ frontmatter: { title, created, img }, slug, content }) => {
  return (
    <Post>
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkUnwrapImages]}
      >
        {content}
      </ReactMarkdown>
    </Post>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
}
