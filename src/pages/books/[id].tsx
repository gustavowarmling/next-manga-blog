import { Banner } from "../../components/Banner";
import { BookInfo } from "../../components/BookInfo";
import { PagesPreview } from "../../components/PagesPreview";
import { Container, ContentContainer} from "./styles";

export default function Book() {    
    return(
        <Container>
            <Banner 
                title="Battle Royale"
                image="https://images-na.ssl-images-amazon.com/images/I/31ED3F1GGRL.jpg"
            />
            <ContentContainer>
                <BookInfo />
                <PagesPreview />
            </ContentContainer>
        </Container>
    )
}