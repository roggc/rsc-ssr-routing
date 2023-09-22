import React from "react";
import Home from "../../client/components/home.js";

export default async function HomeRSC() {
  return <Home __isClient__="../components/home.js" />;
}
