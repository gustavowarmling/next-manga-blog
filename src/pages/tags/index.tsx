import { AdvancedSearch } from "../../components/AdvancedSearch";
import { TagsGrid } from "../../components/TagsGrid";
import { Container, ContentContainer } from "./styles";

export default function Tags() {
  return (
    <Container>
      <ContentContainer>
        <TagsGrid title="Tags" />
      </ContentContainer>
    </Container>
  );
}
