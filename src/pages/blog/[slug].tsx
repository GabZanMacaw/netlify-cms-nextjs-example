import Markdown from "markdown-to-jsx";
import Header from "../../components/Header";
import Seo from "../../components/Seo";
import { Container } from "../../styles/Home";

import {
  getContentFromFile,
  getContentFromFolder,
} from "../../lib/fileHandlers";

export default function BlogInterna({ post }) {
  return (
    <Container>
      <Seo url={`/blog/${post.slug}`} titulo={post.titulo} />
      <Header />
      <main>
        <h1>{post.titulo}</h1>
        <Markdown>{post.body}</Markdown>
      </main>
    </Container>
  );
}

export function getStaticPaths() {
  return {
    paths: getContentFromFolder("content/blog").map((post) => {
      return { params: { slug: post.slug } };
    }),
    fallback: "blocking",
  };
}

export function getStaticProps({ params }) {
  try {
    const data = getContentFromFile(`content/blog/${params.slug}.md`);

    return {
      props: {
        post: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
