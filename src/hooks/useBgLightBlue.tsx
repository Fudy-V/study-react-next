import { useEffect } from "react";

export const useBgLightBlue = () => {
  // 処理→マウント時、返り値→アンマウント時の処理
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
