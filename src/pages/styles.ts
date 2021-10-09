import styled from "styled-components";

export const Container = styled.main`
    margin-top: 4rem;
    
    

    @media(max-width: 1120px) {
        padding: 0 .8rem;
    }
`
export const ContentContainer = styled.div`
    max-width: 1120px;
    margin: 4rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
`