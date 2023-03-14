import "../styles/index.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";

import { useRouter } from "next/router";
import en from "../../locales/en";
import tr from "../../locales/tr";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const t = locale === "en" ? en : tr;
  return (
    <>
      <Navbar t={t} />
      <Component {...pageProps} />
      <Footer2 t={t} />
    </>
  );
}
