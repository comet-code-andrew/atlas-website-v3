import {LocaleProvider} from "@/contexts/locale.context";
import App from "@/components/App";

export default function Home() {
  return (
    <>
      <LocaleProvider>
        <App/>
      </LocaleProvider>
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
