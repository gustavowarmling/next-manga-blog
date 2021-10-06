import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Logo } from '../../ui/Logo';
import { SideMenuWrapper, SideMenuContent, LogoWrapper, LinkCollection, CollectionTitle } from './styles';

interface SideMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SideMenu= ({ isOpen, setIsOpen }: SideMenuProps) => {
  function handleCloseModal() {
    setIsOpen(false);
  }

  return(
    <SideMenuWrapper className={isOpen ? 'open' : ''} onClick={handleCloseModal}>
      <SideMenuContent>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <LinkCollection>
          <CollectionTitle>Categoria 1</CollectionTitle>

          <Link href="">
            <a>opção 1</a>
          </Link>
          <Link href="">
            <a>opção 2</a>
          </Link>
          <Link href="">
            <a>opção 3</a>
          </Link>
        </LinkCollection>

        <LinkCollection>
          <CollectionTitle>Categoria 2</CollectionTitle>

          <Link href="">
            <a>opção 1</a>
          </Link>
          <Link href="">
            <a>opção 2</a>
          </Link>
          <Link href="">
            <a>opção 3</a>
          </Link>
        </LinkCollection>

        <LinkCollection>
          <CollectionTitle>Categoria 3</CollectionTitle>

          <Link href="">
            <a>opção 1</a>
          </Link>
          <Link href="">
            <a>opção 2</a>
          </Link>
          <Link href="">
            <a>opção 3</a>
          </Link>
        </LinkCollection>
      </SideMenuContent>
    </SideMenuWrapper>
  )
}