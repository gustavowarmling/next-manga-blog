import styled from "styled-components";

export const Container = styled.main`
    margin-top: 4rem;
    
    h2 {
        max-width: 1120px;
        margin: 0 auto 1rem;
        font-size: 2rem;
    }

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

export const SectionContainer = styled.section`
    max-width: 30rem;
`

export const SectionHeader = styled.div`
    h2 {
        margin: 0 0 1rem;
    }
    
    a {
        color: gray;
    }

    align-items: center;
    display: flex;
    justify-content: space-between;
`

export const Publications = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const PopularTagsContainer = styled.div`
    background-color: var(--blue-500);
    padding: 1.2rem;
    max-height: 23rem;
    height: 100%;
    border-radius: 0.5rem;
`

export const PopularTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`