import { Head, Main, NextScript } from "next/document";
import { Html } from "next/document";


export default function Document() {
  return (
    <Html>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="title" content="Nestar Demo" />
      <meta name="robots" content="index, follow" />
      <link rel="icon"  type="image/png" href="/img/favicon.svg" />
      {/* <link rel="icon" type="image/png" href="/img/logo/favicon.svg" /> */}
      {/**SEO */}
      <meta
        name="keyword"
        content="nestar, nestar.uz, devex mern, mern nestjs fullstack" />
      <meta
        name="description"
        content={"Buy and sell properties anywhere anytime in South Korea | " +
          "Покупайте и продавайте недвижимость в любой точке Южной Кореи в любойе время. |" +
          "대한민국 연제 어디서나 부동산을 사고팔 수 있습니다"} />
    </Head><body>
        <Main />
        <NextScript />
      </body>
      </Html>
);
}