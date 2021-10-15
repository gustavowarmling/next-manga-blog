import styled from "styled-components";

export const SimpleCardContainer = styled.div`
  position: relative;
  width: 140px;

  img {
    max-height: 200px;
    width: 140px;
    transition: 0.2s ease-out;
  }

  &:hover {
    img {
      filter: brightness(0.3);
    }

    .hide {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const SimpleCardInfo = styled.div`
  display: none;
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  text-align: center;
  width: 140px;

  span {
    font-size: 0.9rem;
    color: var(--subtitle);
  }
`;

export const LikePositioning = styled.div`
  position: absolute;
  bottom: 4.9rem;
  right: 8px;
  font-size: 0.8rem;

  span {
    color: var(--title);
  }

  svg {
    font-size: 1.5rem;
    margin-left: 0.4rem;
  }
`;
