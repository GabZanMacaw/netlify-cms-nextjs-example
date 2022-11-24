import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Seo from "../../components/Seo";
import { Container } from "../../styles/Home";

export default function Blog() {
  return (
    <Container>
      <Seo url="/blog" titulo="Blog" />
      <Header />
      <main>
        <h1>Blog</h1>
        <div className="posts">
          <Link href="/blog/post-1">
            <p>Post 1</p>
          </Link>
          <Link href="/blog/post-2">
            <p>Post 2</p>
          </Link>
          <Link href="/blog/post-3">
            <p>Post 3</p>
          </Link>
        </div>
      </main>
    </Container>
  );
}
