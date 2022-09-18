import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import Loading from "../components/Loading";

import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps, session }) {
  const [loading, setloading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setloading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setloading(false);
  });
  return (
    <>
      <SessionProvider session={session}>
        {loading && <Loading />}

        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
