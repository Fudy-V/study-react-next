import Image from "next/image";
import classes from "./Links.module.css";
import { Item } from "@/types";



const ITEMS:Item[] =[
  {
    href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    image:          
      <Image
      className={classes.logo}
      src="https://nextjs.org/icons/vercel.svg"
      alt="Vercel logomark"
      width={20}
      height={20}
      />,
    description:"Deploy now",
    className:classes.primary,
  },
  {
    href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    description:"Read our docs",
    className:classes.secondary
  },

];

export function Links() {
  return (
    <div>
      <div className={classes.ctas}>
        {ITEMS.map(item=>{
          return (
            <a
          className={item.className}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          key={item.href}
        >
          {item.image}
          <p>{item.description}</p>
        </a>
          )
        })}
      </div>
    </div>
  );
}
