import { SectionHeader } from "../SectionHeader";
import { Tag } from "../../ui/Tag";

import { Container, PopularTags, PopularTagsContainer } from "./styles";

type TagListProps = {
  title: string;
};

export function TagList({ title }: TagListProps) {
  return (
    <Container>
      <SectionHeader title={title} pathTo="#" />

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
