import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue-500);
    position: relative;
`;

export const Content = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    height: 8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        display: flex;
        margin-right: 2rem;
    }

    div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
    }

    @media(max-width: 1120px) {
        padding: 0 .8rem;
    }
`

export const LogoWrapper = styled.div`
    max-width: 12.5rem;
`

export const StyledButton = styled.button`
    border: none;
    background: none;
    font-size: 2rem;
    cursor: pointer;
`