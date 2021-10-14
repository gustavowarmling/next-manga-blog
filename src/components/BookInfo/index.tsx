import Link from "next/link";
import { Tag } from "../../ui/Tag";
import { InfoContainer, Info, TagsContainer, BookTags } from "./style";

export function BookInfo() {
  return (
    <InfoContainer>
      <Info>
        <span>Synopsis</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          perspiciatis asperiores maiores fuga, sunt accusantium, nihil tempore
          recusandae voluptatum illum repellendus tenetur aspernatur ullam. Sunt
          reiciendis pariatur quis expedita nemo?
        </p>
        <span>Collection:</span>
        <Link href="/">
          <a>one-shot</a>
        </Link>

        <span>Parody:</span>
        <Link href="/">
          <a>original</a>
        </Link>
      </Info>
      <TagsContainer>
        <p>Tags:</p>
        <BookTags>
          <Tag title="teste" />
          <Tag title="teste" />
          <Tag title="teste" />
          <Tag title="teste" />
          <Tag title="teste" />
          <Tag title="teste" />
          <Tag title="teste" />
          <Tag title="teste" />
        </BookTags>
      </TagsContainer>
    </InfoContainer>
  );
}
