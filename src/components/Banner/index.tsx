import { BannerContainer, Info } from "./styles";

type BannerProps = {
  title: string;
  author?: string;
  image: string;
};

export function Banner({ image, title, author }: BannerProps) {
  return (
    <BannerContainer>
      <img src={image} />

      <Info>
        <h1>{title}</h1>
        <span>{author}</span>
      </Info>
    </BannerContainer>
  );
}
