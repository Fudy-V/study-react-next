import Head from "next/head";
import { geistSans, geistMono } from "@/fonts";
import classes from "@/styles/Home.module.css";
import { Footer } from "@/compornents/Fotter";
import { Main } from "@/compornents/Main";
import { Header } from "@/compornents/Header";
import { useEffect, useCallback } from "react";
import Link from "next/link";
import { eventType } from "@/types";

export default function Home() {
  const handleClick = useCallback((e: eventType) => {
    e.preventDefault();
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
      <Link href="/about" onClick={handleClick}>
        ボタン
      </Link>
      <div className={`${classes.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Main page="index" />

        <Footer />
      </div>
    </>
  );
}
