import { BannerContainer } from "./styles";

type BannerProps = {
  title: string;
  image: string;
};

export function Banner({ image, title }: BannerProps) {
  return (
    <BannerContainer>
      <img src={image} />
      <h1>{title}</h1>
    </BannerContainer>
  );
}
