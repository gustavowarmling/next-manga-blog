import { HorizontalPublications } from "../components/HorizontalPublications";
import { Carousel } from "../components/Carousel";
import { TagList } from "../components/TagList";

import { Container, ContentContainer } from "./styles";

export default function Home() {
  return (
    <>
      <Container>
        <Carousel title="Hottest 🔥" />
        <Carousel title="Most Viewed 🧨" />

        <ContentContainer>
          <HorizontalPublications title="New Publications" />
          <TagList title="Popular tags" />
        </ContentContainer>
      </Container>
    </>
  );
}
