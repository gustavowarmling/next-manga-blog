import { Dispatch, SetStateAction } from "react";

import Link from "next/link";
import { SearchBox } from "../../ui/SearchBox";
import { Container, Content, LogoWrapper, StyledButton } from "./styles";
import { Logo } from "../../ui/Logo";
import { IoMenuOutline } from "react-icons/io5";

interface HeaderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header({ setIsOpen }: HeaderProps) {
  function handleOpenMenu() {
    setIsOpen(true);
  }

  return (
    <Container>
      <Content>
        <div>
          <StyledButton onClick={handleOpenMenu}>
            <IoMenuOutline color="white" />
          </StyledButton>

          <Link href="/">
            <a>
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
            </a>
          </Link>
        </div>

        <SearchBox />
      </Content>
    </Container>
  );
}
