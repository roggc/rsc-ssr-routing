import React from "react";
import styled from "styled-components";
import img1 from "../assets/react.png";
import { useSlice } from "../slices";
import Image from "./image";

export default function Home() {
  const [count1, setCount1] = useSlice("count1");
  const [count2, reduxDispatch, { increment }] = useSlice("count2");

  return (
    <>
      <Title>RSC + SSR</Title>
      <Image src={img1} borderRadius="10px" maxWidth="600px" />

      <Div>
        This is a setup for development with RSC (React Server Components) and
        SSR (Server Side Rendering)
      </Div>
      <Div>
        There is another setup which only includes RSC, but not SSR. Can be
        found{" "}
        <a href="https://github.com/roggc/rsc" target="_blank">
          here
        </a>
      </Div>
      <Div>
        It has included{" "}
        <a href="https://styled-components.com/" target="_blank">
          styled-components
        </a>{" "}
        and{" "}
        <a href="https://react-context-slices.github.io/" target="_blank">
          react-context-slices
        </a>
        , a library to manage state that seamlessly integrates both Redux and
        React Context with zero-boilerplate
      </Div>
      <Div>
        With this setup you can build SPA's with secret keys to fetch an API
        hidden from the Client (browser) or fetch some database in the server
        with Prisma.
      </Div>
      <Counters>
        <div>
          <button onClick={() => setCount1((c) => c + 1)}>+</button>
          {count1}
        </div>
        <div>
          <button onClick={() => reduxDispatch(increment())}>+</button>
          {count2}
        </div>
      </Counters>
    </>
  );
}

const Div = styled.div`
  text-align: center;
`;

const Title = styled(Div)`
  font-weight: 700;
  font-size: 2rem;
`;

const Counters = styled.div`
  display: flex;
  gap: 10px;
`;
