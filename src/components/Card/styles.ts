import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 16rem;
    height: 28.75rem;
	position: relative;
	
    img {
        transition: 0.2s ease-out;
    }

    &:hover {
		img {
            opacity: 0.2;
        }
		
        &:before {
			opacity: 1;
        }

		.hideTags {
			opacity: 1;
			transform: translateY(-22rem);
            display: flex;
            flex-direction: column;
        }
    }

    .hideTags   {
        height: 0;
        display: none;
        position: relative;
        z-index: 3;
        color: white;
        opacity: 0;
        transform: translateY(30px);
        transition: 0.5s;
    }
`

export const Info = styled.div`
    background: var(--blue-500);
    padding: 1rem;
    border-radius: 0 0 0.5rem 0.5rem;
    
    p {
        font-size: 1.4rem;
    }

    span {
        color: gray;
    }
`

export const Description = styled.div`
    margin-left: 1rem;
    
    div {
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
    }

    span {
        font-size: 0.8rem;
    }
`


export const TagList = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 100%;
`