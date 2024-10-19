import { ReactElement } from "react";

export type Prop = {
  children?: ReactElement;
  //   title: string;
  page: string;
  number?: number;
  array?: Array<number | string>;
  obj?: object;
  code?: ReactElement;
  onClick?: () => void;
};
