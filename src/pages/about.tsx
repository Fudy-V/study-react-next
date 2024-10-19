import Head from "next/head";
import localFont from "next/font/local";
import classes from "@/styles/Home.module.css";
import { Footer } from "@/compornents/Fotter";
import { Main } from "@/compornents/Main";
import { Header } from "@/compornents/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
