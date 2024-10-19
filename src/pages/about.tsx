import Head from "next/head";
import { geistSans, geistMono } from "@/fonts";
import classes from "@/styles/Home.module.css";
import { Footer } from "@/compornents/Fotter";
import { Main } from "@/compornents/Main";
import { Header } from "@/compornents/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />
      <div className={`${classes.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Main page="about" />

        <Footer />
      </div>
    </>
  );
}
