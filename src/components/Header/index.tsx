import Link from "next/link";
import { SearchBox } from "../../ui/SearchBox";
import { Container, Content, LogoWrapper } from "./styles";
import { Logo } from "../../ui/Logo";

export function Header() {
  return (
    <Container>
      <Content>
        <Link href="/">
          <a>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </a>
        </Link>

        <SearchBox />
      </Content>
    </Container>
  );
}
