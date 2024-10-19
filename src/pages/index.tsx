import Head from "next/head";
import { geistSans, geistMono } from "@/pages/fonts";
import classes from "@/styles/Home.module.css";
import { Footer } from "@/compornents/Fotter";
import { Main } from "@/compornents/Main";
import { Header } from "@/compornents/Header";
import Link from "next/link";
import { useCallback } from "react";
import { eventType } from "@/types";

export default function Home() {
  const handleClick = useCallback((e: eventType) => {
    e.preventDefault();
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
