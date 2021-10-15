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

        <Carousel title="New Publications 🎇" pathTo={"#"} />
        <Carousel title="Hottest 🔥" pathTo={"#"} />
        <Carousel title="Most Viewed 🧨" pathTo={"#"} />
      </Container>
    </>
  );
}
