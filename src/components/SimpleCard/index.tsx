import { Likes } from "../../ui/Likes";
import { SimpleCardContainer, SimpleCardInfo, LikePositioning } from "./styles";

export function SimpleCard() {
  return (
    <SimpleCardContainer>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/31ED3F1GGRL.jpg"
        alt="Battle Royale Cover"
      />
      <SimpleCardInfo className="hide">
        <h3>Battle Royale</h3>
        <span>Koushun Takami</span>
        <LikePositioning>
          <Likes quantity={2300} />
        </LikePositioning>
      </SimpleCardInfo>
    </SimpleCardContainer>
  );
}
