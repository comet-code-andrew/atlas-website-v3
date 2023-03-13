import "../styles/index.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer2 />
    </>
  );
}
