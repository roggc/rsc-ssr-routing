import React from "react";
import styled from "styled-components";
import img1 from "../assets/react.png";
import Code from "./code";
import { useSlice } from "../slices";

export default function Home() {
  const [count1, setCount1] = useSlice("count1");
  const [count2, reduxDispatch, { increment }] = useSlice("count2");

  return (
    <>
      <Title>RSC + SSR setup</Title>
      <Image src={img1} borderRadius="10px" maxWidth="300px" />
      <Code>{"<RSC componentName='some-component'>loading ...</RSC>"}</Code>
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
        With this setup you can build SPA's with secret keys to fetch an API
        hidden from the Client (browser) or fetch some database in the server
        with Prisma.
      </Div>
      <Div>
        The flow of development with this setup is you create RCC's (React
        Client Components) and also corresponding RSC's (React Server
        Components) for these RCC's. What the RSC's do is to fetch data and call
        the RCC. So from the Client you directly not call the RCC but the RSC.
        But how you can do that if RSC's only exist on the server? With a
        special RCC named 'RSC'. So from the Client you call 'RSC' RCC passing
        to it the name of the component (RSC) you want to fetch. This is turn
        will return an RCC with the proper data.
      </Div>
      <Div>
        A post explaining this setup can be found{" "}
        <a
          href="https://medium.com/@roggc9/a-setup-for-rsc-development-1524cb1015ca"
          target="_blank"
        >
          here.
        </a>
      </Div>
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

const Image = styled(({ maxWidth, borderRadius, ...props }) => (
  <img {...props} />
))`
  ${({ maxWidth }) => (!!maxWidth ? `max-width:${maxWidth};` : "")}
  ${({ borderRadius }) =>
    !!borderRadius ? `border-radius:${borderRadius}` : ""}
`;

const Counters = styled.div`
  display: flex;
`;
