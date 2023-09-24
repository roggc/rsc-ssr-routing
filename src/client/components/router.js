import React from "react";
import Home from "./home";
import Ups from "./ups";
import { useSlice } from "../slices";

export default function Router() {
  const [page] = useSlice("page");

  switch (page.name) {
    case "home":
      return <Home {...page.props} />;
    default:
      return <Ups />;
  }
}
