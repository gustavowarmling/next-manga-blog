import styled from "styled-components";

export const Container = styled.form`
    
    width: 16rem;
    height: 3rem;
    display: grid;
    grid-template-columns: 9fr 1fr;
    grid-gap: 5px;
    align-items: center;
    
    background: #1c2230;

    padding: 0.2rem 0.8rem;
    border-radius: 8px;

    input {
        padding: 0.2rem;
        border: none;
        background: #1c2230;
        height: 100%;
        color: #fff;
        font-size: 1rem;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
        display: flex;
        height: 100%;
        align-items: center;

        svg {
            font-size: 1.5rem;
            width: 100%
        }
    }

    &:hover {
        filter: brightness(0.9);
    }
`