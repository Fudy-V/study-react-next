import Head from "next/head";
import { geistSans, geistMono } from "@/fonts";
import classes from "@/styles/Home.module.css";
import { Footer } from "@/compornents/Fotter";
import { Main } from "@/compornents/Main";
import { Header } from "@/compornents/Header";
import { useCallback, useEffect, useState } from "react";
import { eventType } from "@/types";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const handleChange = useCallback((e: eventType) => {
    setText(e.target.value);
  }, []);

  // 処理→マウント時、返り値→アンマウント時の処理
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <div className={classes.centerWrapper}>
        {isShow ? <h1 className={classes.counter}>{count}</h1> : null}
        <button className={classes.counterButton} onClick={handleClick}>
          ボタン
        </button>
        <button className={classes.counterButton} onClick={() => setIsShow((isShow) => !isShow)}>
          {isShow ? "非表示" : "表示"}
        </button>
        <input type="text" value={text} onChange={handleChange} />
      </div>
      <div className={`${classes.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Main page="index" />

        <Footer />
      </div>
    </>
  );
}
