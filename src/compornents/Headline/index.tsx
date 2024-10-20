import React from "react";
import { Prop } from "@/types";
import classes from "./Headline.module.css";

export function Headline(props: Prop) {
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>

      <p>get started by editing {props.children}</p>
    </div>
  );
}
