import { container } from "../styles/Home.module.css"
import Head from "next/head"

export default function Home() {
  return (
    <div className={container}>
      <Head>
        <title>Header Home</title>
        <meta name="description" content="Description Home" />
      </Head>

      <header>Header</header>

      <main>
        <h1>Welcome to ...</h1>
      </main>

      <footer>Footer</footer>
    </div>
  )
}
