import Head from "next/head";
import Hero from "@/components/Hero";
import References from "@/components/References";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Section from "@/components/Section";
import Services from "@/components/Services";
import { useRouter } from "next/router";
import en from "../../locales/en";
import tr from "../../locales/tr";
import {LocaleContext} from "@/contexts/locale.context";
import {useContext} from "react";

export default function App() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const { setLocaleToEN, setLocaleToTR } = useContext(LocaleContext)

  setLocaleToTR()
  // locale === "en" ? setLocaleToEN() : setLocaleToTR();

  const t = locale === "en" ? en : tr;

  return (
    <>
        <Head>
          <title>Atlas Kontrol Sistemleri</title>
          <meta name="description" content="Atlas Kontrol Sistemleri" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Hero/>
        <About t={t} />
        <References t={t} />
        <Partners t={t} />
        <Services t={t} />
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