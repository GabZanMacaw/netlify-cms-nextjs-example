import Head from "next/head";

import { attributes as seo } from "../../content/seo.md";

export default function Seo({ url = "/", titulo = null, noIndex = false }) {
  return (
    <Head>
      <title>{titulo ? `${titulo} - ${seo.titulo}` : seo.titulo}</title>
      <meta name="description" content={seo.descricao} />
      {noIndex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <meta name="keywords" content={seo.palavrasChave} />
      <link rel="icon" type="image/png" href={seo.favicon} />

      <meta property="og:url" content={seo.url + url} />
      <meta property="og:title" content={seo.titulo} />
      <meta property="og:image" content={seo.imagem} />
      <meta property="og:description" content={seo.descricao} />

      <meta name="twitter:url" content={seo.url + url} />
      <meta name="twitter:title" content={seo.titulo} />
      <meta name="twitter:image" content={seo.imagem} />
      <meta name="twitter:description" content={seo.descricao} />

      <meta itemProp="url" content={seo.url + url} />
      <meta itemProp="name" content={seo.titulo} />
      <meta itemProp="image" content={seo.imagem} />
      <meta itemProp="description" content={seo.descricao} />

      <link rel="canonical" href={seo.url + url} />
    </Head>
  );
}
