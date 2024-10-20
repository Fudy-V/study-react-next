import Head from "next/head";
import { geistSans, geistMono } from "@/fonts";
import classes from "@/styles/Home.module.css";
import { Footer } from "@/compornents/Fotter";
import { Main } from "@/compornents/Main";
import { Header } from "@/compornents/Header";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgLightBlue } from "@/hooks/useBgLightBlue";

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

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
        <button className={classes.counterButton} onClick={() => handleDisplay()}>
          {isShow ? "非表示" : "表示"}
        </button>

        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className={`${classes.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Main page="index" />

        <Footer />
      </div>
    </>
  );
}
