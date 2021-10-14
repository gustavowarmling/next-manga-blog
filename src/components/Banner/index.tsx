import { BannerContainer } from "./styles";

type BannerProps = {
  title: string;
  author?: string;
  image: string;
};

export function Banner({ image, title, author }: BannerProps) {
  return (
    <BannerContainer>
      <img src={image} />
      <div>
        <h1>{title}</h1>
        <span>{author}</span>
      </div>
    </BannerContainer>
  );
}
