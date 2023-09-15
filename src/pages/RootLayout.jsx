import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import styled from "styled-components";

export default function RootLayout() {
  return (
    <Container>
      <MainNavigation />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
