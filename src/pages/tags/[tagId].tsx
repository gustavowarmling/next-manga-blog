import { Banner } from "../../components/Banner";
import { TagInfo } from "../../components/TagInfo";
import { BooksPreview } from "../../components/BooksPreview";
import { Container, ContentContainer } from "./styles";

export default function Tags() {
  return (
    <Container>
      <Banner
        title="Dystopian"
        image="https://images-na.ssl-images-amazon.com/images/I/31ED3F1GGRL.jpg"
      />
      <ContentContainer>
        <TagInfo />
        <BooksPreview title="Books" />
      </ContentContainer>
    </Container>
  );
}
