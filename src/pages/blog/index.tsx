import Link from "next/link";
import Header from "../../components/Header";
import Seo from "../../components/Seo";
import { getContentFromFolder } from "../../lib/fileHandlers";
import { sortDate } from "../../lib/sorting";
import { Container } from "../../styles/Home";

export default function Blog({ posts }) {
  return (
    <Container>
      <Seo url="/blog" titulo="Blog" />
      <Header />
      <main>
        <h1>Blog</h1>
        <div className="posts">
          {posts.sort(sortDate("data")).map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <p>{post.titulo}</p>
            </Link>
          ))}
        </div>
      </main>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getContentFromFolder("content/blog"),
    },
  };
}
