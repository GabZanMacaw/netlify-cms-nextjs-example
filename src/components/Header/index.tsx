import Link from "next/link";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>Site netlify cms</h1>
      <nav>
        <Link href="/">
          <h3>Home</h3>
        </Link>
        <Link href="/page">
          <h3>Página customizada</h3>
        </Link>
        <Link href="/blog">
          <h3>Blog</h3>
        </Link>
      </nav>
    </Container>
  );
}
