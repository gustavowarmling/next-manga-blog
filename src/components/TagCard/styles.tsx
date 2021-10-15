import styled from "styled-components";

export const TagCardContainer = styled.div`
  position: relative;
  width: 140px;

  img {
    max-height: 200px;
    width: 140px;
    filter: brightness(0.6) blur(2px);
  }
`;

export const TagCardInfo = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  text-align: center;
  width: 140px;
`;
