import Link from 'next/link';

import { Container } from './styles';

type SectionHeaderProps = {
  title: string;
  pathTo: string;
}

export function SectionHeader({ title, pathTo = '#' }: SectionHeaderProps) {
  return(
    <Container>
      <h2>{title}</h2>

      <Link href={pathTo}>
        <a>see all</a>
      </Link>
    </Container>
  )
}