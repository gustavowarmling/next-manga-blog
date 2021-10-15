import { AdvancedSearch } from "../../components/AdvancedSearch";
import { BooksGrid } from "../../components/BooksGrid";
import { Container, ContentContainer } from "./styles";

export default function Books() {
  return (
    <Container>
      <AdvancedSearch />
      <ContentContainer>
        <BooksGrid title="Books" />
      </ContentContainer>
    </Container>
  );
}
