import Tag from '../../ui/Tag';
import Likes from '../../ui/Likes';
import { Container, CardFooter, Description, TagList, Info, LikePositioning }  from './styles';

export default function Card() {
    return (
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
                        <Tag> Horror </Tag>
                        <Tag> Dystopian </Tag>
                        <Tag> Suspense </Tag>
                    </TagList>
                </Info>
                <LikePositioning>
                    <Likes>
                        {2300}
                    </Likes>
                </LikePositioning>
            </Description>
            <CardFooter>
                <p>Battle Royale</p>
                <span>Koushun Takami</span>
            </CardFooter>
        </Container>
    )
}