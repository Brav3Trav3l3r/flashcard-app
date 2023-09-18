import { Icon } from "@iconify/react";
import { Button } from "../styles/Button.styled";
import { Link} from "react-router-dom";
import styled from "styled-components";

export default function MainNavigation({ setIsOpen }) {

  return (
    <Navigation>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        <Icon icon="lucide:plus" width={32} />
      </Button>

      <Link to="/">My Flashcards</Link>
      <Button>
        <Icon icon="lucide:moon-star" width={32} />
      </Button>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    font-family: "Playball", cursive;
    font-size: 2.5rem;
    color: inherit;
  }

  @media (max-width: 768px) {
    a {
      font-size: 2rem;
    }
  }
`;
