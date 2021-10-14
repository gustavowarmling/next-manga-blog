import { Likes } from "../../ui/Likes";
import { MiniCardContainer, MiniCardInfo, LikePositioning } from "./styles";

export function MiniCard() {
  return (
    <div>
      <MiniCardContainer>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/31ED3F1GGRL.jpg"
          alt="Battle Royale Cover"
        />
        <MiniCardInfo className="hide">
          <h3>Battle Royale</h3>
          <span>Koushun Takami</span>
          <LikePositioning>
            <Likes quantity={2300} />
          </LikePositioning>
        </MiniCardInfo>
      </MiniCardContainer>
    </div>
  );
}
