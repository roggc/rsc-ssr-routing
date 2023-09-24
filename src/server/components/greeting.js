import React from "react";
import RCC from "./rcc.js";

export default async function Greeting() {
  const greeting = await new Promise((r) =>
    setTimeout(() => {
      if (Math.random() < 0.5) {
        return r("aloha");
      }
      return r("good morning");
    }, 500)
  );
  return <RCC __isClient__="../components/greeting.js" greeting={greeting} />;
}
