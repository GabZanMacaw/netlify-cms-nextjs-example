import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Seo from "../components/Seo";
import { Container } from "../styles/Page";

export default function Page() {
  return (
    <Container>
      <Seo url="/page" titulo="Página customizada" />
      <Header />
      <main>
        <h1>Página customizada</h1>
        <a href="/pdf-test.pdf" download="pdf-baixado">
          <p>Baixar catálogo</p>
        </a>
        <h3>Serviços</h3>
        <ul>
          <li>
            <Image
              src="/Pinguim.png"
              alt="Imagem gerenciável"
              width={60}
              height={60}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <p>Serviço 1</p>
          </li>
          <li>
            <Image
              src="/Pinguim.png"
              alt="Imagem gerenciável"
              width={60}
              height={60}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <p>Serviço 2</p>
          </li>
          <li>
            <Image
              src="/Pinguim.png"
              alt="Imagem gerenciável"
              width={60}
              height={60}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <p>Serviço 3</p>
          </li>
          <li>
            <Image
              src="/Pinguim.png"
              alt="Imagem gerenciável"
              width={60}
              height={60}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <p>Serviço 4</p>
          </li>
          <li>
            <Image
              src="/Pinguim.png"
              alt="Imagem gerenciável"
              width={60}
              height={60}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <p>Serviço 5</p>
          </li>
        </ul>
      </main>
    </Container>
  );
}
