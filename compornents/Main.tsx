import styles from "@/styles/Home.module.css";
import { Headline } from "./Headline";
import { Links } from "./Links";
import { Prop } from "../types/Types";

export function Main(props: Prop) {
  return (
    <>
      <main className={styles.main}>
        <Headline page={props.page}>{<code>pages/{props.page}.tsx</code>}</Headline>
        <Links />
      </main>
    </>
  );
}
