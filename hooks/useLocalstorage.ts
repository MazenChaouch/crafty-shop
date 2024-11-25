"use client";
import { useState } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);

      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  const setValue = (value: string) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
