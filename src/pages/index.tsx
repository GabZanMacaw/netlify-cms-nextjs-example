import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "../components/Header";
import Seo from "../components/Seo";
import { Container } from "../styles/Home";

import { attributes as cms } from "../../content/home.md";

export default function Home() {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Container>
        <Seo />
        <Header />
        <main>
          <h1>Página inicial</h1>
          <p>{cms.texto}</p>
          <Image
            src={cms.imagem}
            alt="Imagem gerenciável"
            width={200}
            height={150}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <h3>Lista simples</h3>
          <ul>
            {cms.lista.map((item) => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </main>
      </Container>
      <Script>
        {`if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }`}
      </Script>
    </>
  );
}
