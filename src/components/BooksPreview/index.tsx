import { MiniCard } from "../MiniCard";
import { PagesContainer, PagesPreviewContainer } from "./styles";

export function BooksPreview() {
  return (
    <PagesPreviewContainer>
      <h2>Books</h2>
      <PagesContainer>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </PagesContainer>
    </PagesPreviewContainer>
  );
}
