import React from "react";
import Home from "../../client/components/home.js";

export default async function HomeRSC() {
  // you probably want to fetch some data in here
  return <Home __isClient__="../components/home.js" />;
}
