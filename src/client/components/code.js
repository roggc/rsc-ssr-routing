import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism/index";
import React from "react";

const Code = ({ children }) => {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
