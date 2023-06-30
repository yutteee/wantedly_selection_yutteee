"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Link href="/projects">start</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
