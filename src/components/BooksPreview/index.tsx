import { SimpleCard } from "../SimpleCard";
import { PagesContainer, PagesPreviewContainer } from "./styles";

interface BooksPreviewProps {
  title: string;
}

export function BooksPreview({ title }: BooksPreviewProps) {
  return (
    <PagesPreviewContainer>
      <h2>{title}</h2>
      <PagesContainer>
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </PagesContainer>
    </PagesPreviewContainer>
  );
}
