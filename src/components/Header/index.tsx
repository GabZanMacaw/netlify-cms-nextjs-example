import Link from "next/link";
import { Container } from "./styles";

import { attributes as seo } from "../../../content/seo.md";
import { attributes as page } from "../../../content/page.md";

export default function Header() {
  return (
    <Container>
      <h1>{seo.titulo}</h1>
      <nav>
        <Link href="/">
          <h3>Home</h3>
        </Link>
        <Link href="/page">
          <h3>{page.titulo}</h3>
        </Link>
        <Link href="/blog">
          <h3>Blog</h3>
        </Link>
      </nav>
    </Container>
  );
}
