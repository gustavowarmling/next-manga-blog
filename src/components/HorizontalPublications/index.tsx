import { SectionHeader } from "../SectionHeader";
import { HorizontalCard } from "../HorizontalCard";

import { Container, Publications } from "./styles";

type HorizontalPublicationsProps = {
 title: string; 
}

export function HorizontalPublications({ title }: HorizontalPublicationsProps) {
  return(
    <Container>
    <SectionHeader title={title} pathTo='#'/>

    <Publications>
      <HorizontalCard />
      <HorizontalCard />
    </Publications>
  </Container>
  )
}