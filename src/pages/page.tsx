import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Seo from "../components/Seo";
import { Container } from "../styles/Page";

import { attributes as cms } from "../../content/page.md";

export default function Page() {
  return (
    <Container>
      <Seo url="/page" titulo={cms.titulo} />
      <Header />
      <main>
        <h1>{cms.titulo}</h1>
        <a href={cms.catalogo} download="pdf-baixado">
          <p>Baixar catálogo</p>
        </a>
        <h3>Serviços</h3>
        <ul>
          {cms.servicos.map((servico, i) => (
            <li>
              <Image
                src={servico.imagem}
                alt={servico.texto}
                width={60}
                height={60}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <p>{servico.texto}</p>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  );
}
