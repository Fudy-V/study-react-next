import Head from "next/head";
import localFont from "next/font/local";
import classes from "@/styles/Home.module.css";
import { Footer } from "../../compornents/Footer";
import { Main } from "../../compornents/Main";
import { Header } from "../../compornents/Header";

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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={`${classes.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Main page="about" />

        <Footer />
      </div>
    </>
  );
}
