import { Banner } from "../../components/Banner";
import { TagInfo } from "../../components/TagInfo";
import { BooksGrid } from "../../components/BooksGrid";
import { Container, ContentContainer } from "./tagStyles";

export default function tag() {
  return (
    <Container>
      <Banner
        title="Dystopian"
        image="https://images-na.ssl-images-amazon.com/images/I/31ED3F1GGRL.jpg"
      />
      <ContentContainer>
        <TagInfo />
        <BooksGrid title="Books" />
      </ContentContainer>
    </Container>
  );
}
