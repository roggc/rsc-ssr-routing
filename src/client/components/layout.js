import React from "react";
import L from "./link.js";
import { useNavigation } from "../hooks/index.js";
import styled from "styled-components";
import Router from "./router.js";

export default function Layout({ title }) {
  useNavigation();

  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <Body>
        <Nav>
          <Link page={{ name: "home" }} cssIsActive="color:orange;">
            home
          </Link>
          <Link page={{ name: "foo" }} cssIsActive="color:orange;">
            foo
          </Link>
        </Nav>
        <Container>
          <Router />
        </Container>
      </Body>
    </html>
  );
}

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `gap: ${theme.gap}px;`}
  min-width:100px;
`;

const Body = styled.body`
  font-family: sans-serif;
  display: flex;
  height: 97vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

const Link = styled(L)`
  padding: 10px;
`;
