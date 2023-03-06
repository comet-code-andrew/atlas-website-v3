import Head from "next/head";
import Hero from "@/components/Hero";
import References from "@/components/References";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Section from "@/components/Section";
import Services from "@/components/Services";

export default function Home() {
  console.log("Hello");
  return (
    <>
      <Head>
        <title>Atlas Kontrol Sistemleri</title>
        <meta name="description" content="Atlas Kontrol Sistemleri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <References />
      <Partners />
      <Services />
    </>
  );
}
