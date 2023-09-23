import React from "react";
import RCC from "./rcc.js";

export default async function HomeRSC() {
  // you probably want to fetch some data in here
  return <RCC __isClient__="../components/home.js" />;
}
