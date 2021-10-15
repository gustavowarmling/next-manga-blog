import Link from "next/link";

import { Container } from "./styles";

type SectionHeaderProps = {
  title: string;
  pathTo: string;
};

export function SectionHeader({ title, pathTo = "#" }: SectionHeaderProps) {
  return (
    <Container>
      <Link href={pathTo}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
    </Container>
  );
}
