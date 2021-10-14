import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 16rem;
  width: 100%;
  max-height: 28.75rem;

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
      position: absolute;
      opacity: 1;
      display: flex;
      flex-direction: column;
    }
  }

  .hideTags {
    height: 0;
    display: none;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
  }
`;

export const CardFooter = styled.div`
  background: var(--blue-500);
  padding: 1rem;
  border-radius: 0 0 0.5rem 0.5rem;

  p {
    font-size: 1.4rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: var(--subtitle);
    width: 230px;
  }
`;

export const Description = styled.div`
  margin-left: 1rem;
`;

export const Info = styled.div`
  margin-bottom: 1rem;

  p {
    font-size: 1.2rem;
  }

  span {
    font-size: 0.8rem;
  }
`;

export const TagList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 100%;
`;

export const LikePositioning = styled.div`
  position: absolute;
  right: 1rem;
  font-size: 1.3rem;

  svg {
    font-size: 2rem;
    margin-left: 0.4rem;
  }
`;
