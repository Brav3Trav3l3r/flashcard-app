import React from "react";
import styled from "styled-components";
import cards from "../../data/cards.json";
import Collection from "./Collection";

export default function CardCollection() {
  return (
    <CardColllectionStyled>
      {cards.collection.map((c) => (
        <Collection key={c.id} data={c} />
      ))}
    </CardColllectionStyled>
  );
}

const CardColllectionStyled = styled.div`
  margin-top: 3rem;
`;
