import styled from "styled-components";
import React from "react";

export default function Error() {
  return <Container>Something went wrong</Container>;
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
