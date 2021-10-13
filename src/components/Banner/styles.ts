import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  height: 20rem;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 20rem;
    filter: blur(4px);
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translateX(-50%) translateY(-50%);
    font-size: 3rem;
  }
`;
