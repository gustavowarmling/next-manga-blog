import { AdvancedSearch } from "../../components/AdvancedSearch";
import { BooksPreview } from "../../components/BooksPreview";
import { Container, ContentContainer } from "./styles";

export default function Tags() {
  return (
    <Container>
      <AdvancedSearch />
      <ContentContainer>
        <BooksPreview title="Publications" />
      </ContentContainer>
    </Container>
  );
}
