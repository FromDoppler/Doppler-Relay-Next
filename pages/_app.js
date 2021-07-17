import Head from "next/head"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Title :: App</title>
        <meta name="description" content="Description :: App" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/normalize.css" />
        <link rel="stylesheet" href="/globals.css" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/ */}
      </Head>
      {/* start AppLayout here */}
      <Component {...pageProps} />
      {/* end AppLayout here */}
    </>
  )
}

export default App
