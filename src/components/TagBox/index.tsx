import { SectionHeader } from "../SectionHeader";
import { Tag } from "../../ui/Tag";

import { Container, PopularTags, PopularTagsContainer } from "./styles";

type TagBoxProps = {
  title: string;
};

export function TagBox({ title }: TagBoxProps) {
  return (
    <Container>
      <SectionHeader
        title={title}
        pathTo="http://localhost:3000/publications"
      />

      <PopularTagsContainer>
        <PopularTags>
          <Tag title="Action" />
          <Tag title="Horror" />
          <Tag title="Dystopian" />
          <Tag title="Thriller" />
          <Tag title="Terror" />
        </PopularTags>
      </PopularTagsContainer>
    </Container>
  );
}
