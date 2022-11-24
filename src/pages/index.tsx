import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Seo from "../components/Seo";
import { Container } from "../styles/Home";

export default function Home() {
  return (
    <Container>
      <Seo />
      <Header />
      <main>
        <h1>Página inicial</h1>
        <p>Site de teste Netlify CMS</p>
        <Image
          src="/Pinguim.png"
          alt="Imagem gerenciável"
          width={200}
          height={150}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <h3>Lista simples</h3>
        <ul>
          <li>
            <p>Item 1</p>
          </li>
          <li>
            <p>Item 2</p>
          </li>
          <li>
            <p>Item 3</p>
          </li>
          <li>
            <p>Item 4</p>
          </li>
          <li>
            <p>Item 5</p>
          </li>
        </ul>
      </main>
    </Container>
  );
}
