import Head from "next/head";
import styles from "../styles/Home.module.css";
import MyEditor from "./editor";
import { Editor, EditorState, RichUtils } from "draft-js";

export default function Home() {
  var typing = false;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <h2>Hey world</h2>
        <p>{typing ? "..." : EditorState.getCurrentContent}</p>
        <MyEditor />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Butterfly Design{" "}
          <img src="/logo.png" alt="Butterfly Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
