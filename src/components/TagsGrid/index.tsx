import { TagCard } from "../TagCard";
import { TagsContainer, TagsGridContainer } from "./styles";

interface BooksGridProps {
  title: string;
}

export function TagsGrid({ title }: BooksGridProps) {
  return (
    <TagsGridContainer>
      <h2>{title}</h2>
      <TagsContainer>
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
      </TagsContainer>
    </TagsGridContainer>
  );
}
