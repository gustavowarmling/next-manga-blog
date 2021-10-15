import { SimpleCard } from "../SimpleCard";
import { BooksContainer, BooksGridContainer } from "./styles";

interface BooksGridProps {
  title: string;
}

export function BooksGrid({ title }: BooksGridProps) {
  return (
    <BooksGridContainer>
      <h2>{title}</h2>
      <BooksContainer>
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </BooksContainer>
    </BooksGridContainer>
  );
}
