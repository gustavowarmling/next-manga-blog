import { Banner } from "../../components/Banner";
import { BookInfo } from "../../components/BookInfo";
import { PagesPreview } from "../../components/PagesPreview";
import { Container, ContentContainer } from "./postStyles";

export default function book() {
  return (
    <Container>
      <Banner
        title="Battle Royale"
        author="Koushun Takami"
        image="https://images-na.ssl-images-amazon.com/images/I/31ED3F1GGRL.jpg"
      />
      <ContentContainer>
        <BookInfo />
        <PagesPreview />
      </ContentContainer>
    </Container>
  );
}
