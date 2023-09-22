import { useSlice } from "../slices";
import React from "react";

export default function Link({ page, children }) {
  const [, setPage] = useSlice("page");
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        history.pushState(page, null, "");
        setPage(page);
      }}
    >
      {children}
    </a>
  );
}
