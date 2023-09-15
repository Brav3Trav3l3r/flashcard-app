import styled from "styled-components";

export default function Stat() {
  return (
    <StatStyled>
      <p>
        TOTAL 6 <span>|</span> TOPICS 4
      </p>
    </StatStyled>
  );
}

const StatStyled = styled.div`
  color: ${({ theme }) => theme.colors.secondary};

  margin-top: 4rem;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.neutral};
    margin: 0 1rem;
    font-size: 0.75rem;
  }
`;
