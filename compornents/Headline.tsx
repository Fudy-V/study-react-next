import React from "react";
import { Prop } from "../types/Types";
import styles from "@/styles/Home.module.css";

export function Headline(props: Prop) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>

      <p>
        get started by editing <code>pages/{props.page}.tsx</code>
      </p>
    </div>
  );
}
