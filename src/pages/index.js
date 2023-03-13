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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <About />
      <References />
      <Partners />
      <Services />
    </>
  );
}

export async function getStaticProps() {
  // I dont fect anything from the server but to benefit from the static generation
  // I need to use this function and just return an empty object
  return {
    props: {},
  };
}
