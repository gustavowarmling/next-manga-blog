import styled from "styled-components";

export const Container = styled.div`
  background: var(--blue-500);
  display: flex;
  max-width: 30rem;
  height: 11rem;
  border-radius: 0.5rem;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
export const Description = styled.div`
  position: relative;
  padding: 0.8rem;
  width: 100%;
`;

export const LikeWrapper = styled.div`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;

  svg {
    font-size: 1.4rem;
    margin-left: 4px;
  }
`;

export const Info = styled.div`
  h3 {
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: normal;
    letter-spacing: 0.2rem;
  }

  span {
    font-size: 0.8rem;
    color: var(--subtitle);
  }

  p {
    color: var(--description);
    margin-top: 0.6rem;
    font-size: 0.8rem;
    line-height: 1.3rem;
  }
`;
