import { Carousel } from "../components/Carousel";
import { TagBox } from "../components/TagBox";

import { Container, Wrapper } from "./styles";

export default function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <TagBox title="Popular tags" />
        </Wrapper>

        <Carousel
          title="New Publications 🎇"
          pathTo={"http://localhost:3000/publications"}
        />
        <Carousel
          title="Hottest 🔥"
          pathTo={"http://localhost:3000/publications"}
        />
        <Carousel
          title="Most Viewed 🧨"
          pathTo={"http://localhost:3000/publications"}
        />
      </Container>
    </>
  );
}
