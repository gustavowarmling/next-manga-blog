import Link from "next/link";

import { AiOutlineRight } from "react-icons/ai";
import { Container, SeeAll } from "./styles";

type SectionHeaderProps = {
  title: string;
  pathTo: string;
};

export function SectionHeader({ title, pathTo = "#" }: SectionHeaderProps) {
  return (
    <Link href={pathTo}>
      <a>
        <Container>
          <h2>{title}</h2>
          <SeeAll>
            See all <AiOutlineRight />
          </SeeAll>
        </Container>
      </a>
    </Link>
  );
}
