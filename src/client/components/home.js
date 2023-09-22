import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Div>Wellcome to a setup for React fullstack development with RSC.</Div>
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
