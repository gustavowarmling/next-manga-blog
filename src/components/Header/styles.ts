import styled from "styled-components";

export const Container = styled.header`
    background: #11151f;
    position: relative;
`;

export const Content = styled.div`
    width: 1120px;
    margin: 0 auto;
    height: 8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button:first-child {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        margin-left: -10rem;
    }
`