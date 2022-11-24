import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Seo from "../../components/Seo";
import { Container } from "../../styles/Home";

import { useRouter } from "next/router";

export default function BlogInterna() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Container>
      <Seo url={`/blog/${slug}`} titulo="Post 1" />
      <Header />
      <main>
        <h1>Post 1</h1>
        <Markdown>*Texto da postagem*</Markdown>
      </main>
    </Container>
  );
}
