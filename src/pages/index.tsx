import Head from "next/head";
import { geistSans, geistMono } from "@/fonts";
import classes from "@/styles/Home.module.css";
import { Footer } from "@/compornents/Fotter";
import { Main } from "@/compornents/Main";
import { Header } from "@/compornents/Header";
import { useEffect, useState } from "react";
import { eventType } from "@/types";

export default function Home() {
  const [foo, setFoo] = useState(1);

  const handleClick = (e: eventType) => {
    e.preventDefault();
    setFoo((foo) => foo + 1);
  };

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
        <h1 className={classes.counter}>{foo}</h1>
        <button className={classes.counterButton} onClick={handleClick}>
          ボタン
        </button>
      </div>
      <div className={`${classes.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Main page="index" />

        <Footer />
      </div>
    </>
  );
}
