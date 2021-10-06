import styled, { keyframes } from 'styled-components';

const openMenu = keyframes`
  0% { 
    transform: translateX(-350px);
    opacity: 0;
  }
  100% { 
    transform: translateX(0px)
    opacity: 1;
  }
`;

export const SideMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;

  &.open {
    animation-name: ${openMenu};
    animation-duration: .3s;
    animation-timing-function: ease-in;
    display: initial;
    opacity: 1;
  }
`;

export const SideMenuContent = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 350px;
  height: 100%;
  background-color: #1e212b;
  border-radius: 8px;
  padding: 32px;
  z-index: 1000;
`

export const LinkCollection = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  a {
    &:not(:last-of-type) {
      margin-bottom: 1.4rem;
    }
  }
`

export const CollectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const LogoWrapper = styled.div`
  margin-bottom: 1.4rem;
`