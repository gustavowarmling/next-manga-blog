import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  height: 20rem;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 20rem;
    filter: brightness(0.5) blur(3px);
    object-fit: cover;
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);

  h1 {
    font-size: 3rem;
  }

  span {
    font-size: 1.5rem;
    color: var(--subtitle);
  }
`;
