import { useSlice } from "../slices";
import React from "react";

export default function Link({ page, children, ...props }) {
  const [, setPage] = useSlice("page");
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        history.pushState(page, null, "");
        setPage(page);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
