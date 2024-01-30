import { useEffect, useState } from "react";

export function UseLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currValue;
    try {
      currValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      console.log(error);
      currValue = defaultValue;
    }
    return currValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
