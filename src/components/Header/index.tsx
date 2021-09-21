import { SideMenu } from '../SideMenu';
import { SearchBox } from '../../ui/SearchBox';

import { Container, Content }  from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <SideMenu />
                <p>logo</p>
                <SearchBox /> 
            </Content>
        </Container>
    )
}