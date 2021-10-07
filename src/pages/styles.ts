import styled from "styled-components";

export const Container = styled.main`
    max-width: 100%;
    width: 100%;
    margin: 4rem auto 0;
    
    h1 {
        max-width: 1120px;
        margin: 0 auto;
    }

    @media(max-width: 1120px) {
        padding: 0 .8rem;
    }
`