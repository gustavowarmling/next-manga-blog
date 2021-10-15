import Link from "next/link";
import { TagCardContainer, TagCardInfo } from "./styles";

export function TagCard() {
  return (
    <TagCardContainer>
      <Link href="http://localhost:3000/tags/1">
        <a>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/31ED3F1GGRL.jpg"
            alt="Battle Royale Cover"
          />
          <TagCardInfo>
            <h3>Battle Royale</h3>
          </TagCardInfo>
        </a>
      </Link>
    </TagCardContainer>
  );
}
