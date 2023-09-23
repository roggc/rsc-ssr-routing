import React from "react";
import HomeRSC from "./home-rsc.js";
import theme from "../../client/theme.js";
import RCC from "./rcc.js";

const title = "My app";

export default async function Router({ url, body: { props } }) {
  switch (url.pathname) {
    case "/":
      return (
        <RCC __isClient__="../components/theme-provider.js" theme={theme}>
          <RCC __isClient__="../slices.js">
            <RCC __isClient__="../components/layout.js" title={title} />
          </RCC>
        </RCC>
      );
    case "/home":
      return <HomeRSC {...props} />;
    default:
      return <RCC __isClient__="../components/ups.js" />;
  }
}
