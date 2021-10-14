import { Tag } from "../../ui/Tag";
import { Likes } from "../../ui/Likes";
import {
  Container,
  CardFooter,
  Description,
  TagList,
  Info,
  LikePositioning,
} from "./styles";
import Link from "next/link";

export function Card() {
  return (
    <Link href="http://localhost:3000/books/1">
      <a>
        <Container>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/31ED3F1GGRL.jpg"
            alt="Battle Royale Cover"
          />

          <Description className="hideTags">
            <Info>
              <p>Title</p>
              <span>Battle Royale</span>
            </Info>

            <Info>
              <p>Author</p>
              <span>Koushun Takami</span>
            </Info>

            <Info>
              <p>Publication Date</p>
              <span>01/04/1999</span>
            </Info>

            <Info>
              <p>Tags</p>
              <TagList>
                <Tag title="Horror" />
                <Tag title="Dystopian" />
                <Tag title="Suspense" />
              </TagList>
            </Info>

            <LikePositioning>
              <Likes quantity={2300} />
            </LikePositioning>
          </Description>

          <CardFooter>
            <p>Battle Royale</p>
            <span>Koushun Takami</span>
          </CardFooter>
        </Container>
      </a>
    </Link>
  );
}
