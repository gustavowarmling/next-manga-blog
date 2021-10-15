import styled, { keyframes } from "styled-components";

const slide = keyframes`
  0% { 
    transform: translateX(-32px);
    opacity: 0;
  }
  100% { 
    opacity: 1;
    visibility: visible;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
  text-transform: uppercase;

  &:hover {
    span {
      animation-name: ${slide};
      animation-duration: 0.3s;
      animation-timing-function: ease-in;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const SeeAll = styled.span`
  display: flex;
  align-items: center;
  color: var(--description);
  transition: 0.4s;
  opacity: 0;
  visibility: hidden;
  font-size: 0.8rem;

  svg {
    font-size: 1.4rem;
  }
`;
