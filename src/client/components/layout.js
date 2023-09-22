import React from "react";
import RSC from "./rsc.js";
import Link from "./link.js";
import { useNavigation } from "../hooks/index.js";
import styled from "styled-components";

export default function Layout({ title }) {
  const page = useNavigation();

  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <Body>
        <Nav>
          <Link page={{ name: "home" }}>home</Link>
          <Link page={{ name: "foo" }}>foo</Link>
        </Nav>
        <Container>
          <RSC key={page.name} componentName={page.name} {...page.props}>
            loading {page.name} page...
          </RSC>
        </Container>
      </Body>
    </html>
  );
}

const Nav = styled.div`
  display: flex;
  ${({ theme }) => `gap: ${theme.gap}px;`}
`;

const Body = styled.body`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;
