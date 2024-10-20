import { ReactElement } from "react";

export type eventType = React.MouseEvent<HTMLButtonElement>;

export interface Prop {
  children?: ReactElement;
  page: string;
  number?: number;
  array?: Array<number | string>;
  obj?: object;
  code?: ReactElement;
  onClick?: () => void;
}

export interface Item {
  href: string;
  image?: ReactElement;
  description: string;
  className: string;
}
