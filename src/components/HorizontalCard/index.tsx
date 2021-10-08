import Likes from "../../ui/Likes"
import { Container, Description, LikeWrapper, Info } from "./styles"

export default function HorizontalCard() {
    return (
        <Container>
            <img 
                src="https://images-na.ssl-images-amazon.com/images/I/31ED3F1GGRL.jpg" 
                alt="Battle Royale Cover" 
            />
            <Description>
                <Info>
                    <h3>Battle Royale</h3>
                    <span>Koushun Takami</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis sequi rem, ex consequuntur impedit tempora voluptas cum quae! Sequi dolo</p>
                </Info>
                <LikeWrapper>
                    <Likes>
                        {23}
                    </Likes>
                </LikeWrapper>
            </Description>
        </Container>
    )
}