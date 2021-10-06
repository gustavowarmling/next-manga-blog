import Tag from '../../ui/Tag';
import { Container, Info, Description, TagList }  from './styles';

export default function Card() {
    return (
        <Container>
            <img src="https://images-na.ssl-images-amazon.com/images/I/31ED3F1GGRL.jpg" alt="" />
            <Description className="hideTags">
                <div>
                    <p>Title</p>
                    <span>Battle Royale</span>
                </div>
                <div>
                    <p>Author</p>
                    <span>Koushun Takami</span>
                </div>
                <div>
                    <p>Publication Date</p>
                    <span>01/04/1999</span>
                </div>
                <div>
                    <p>Tags</p>
                    <TagList>
                        <Tag>
                            Horror
                        </Tag>
                        <Tag>
                            Dystopian
                        </Tag>
                        <Tag>
                            Suspense
                        </Tag>
                    </TagList>
                </div>
            </Description>
            <Info>
                <p>Battle Royale</p>
                <span>Koushun Takami</span>
            </Info>
        </Container>
    )
}