import { useSlice } from "../slices";
import React from "react";
import styled from "styled-components";

export default function Link({ page, children, ...props }) {
  const [pageSelected, setPage] = useSlice("page");
  return (
    <A
      href=""
      onClick={(e) => {
        e.preventDefault();
        history.pushState(page, null, "");
        setPage(page);
      }}
      isActive={pageSelected.name === page.name}
      {...props}
    >
      {children}
    </A>
  );
}

const A = styled(({ isActive, cssIsActive = "", ...props }) => (
  <a {...props} />
))`
  ${({ isActive, cssIsActive }) => (isActive ? cssIsActive : "")}
`;
