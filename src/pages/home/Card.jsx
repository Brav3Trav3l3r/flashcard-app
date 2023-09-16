import React from "react";
import styled from "styled-components";

export default function Card({ cardDetail: c }) {
  return (
    <CardStyled className="card">
      <h1>{c.title}</h1>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.cardContent};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 1rem;
  height: 100%;

  h1 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
