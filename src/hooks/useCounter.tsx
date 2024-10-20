import { useState, useCallback } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
