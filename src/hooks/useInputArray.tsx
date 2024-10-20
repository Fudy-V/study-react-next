import { eventType } from "@/types";
import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([]);
  const handleChange = useCallback((e: eventType) => {
    setText(e.target.value);
  }, []);
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("SAME!!!");
        return prevArray;
      }

      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
