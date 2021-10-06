import Image from 'next/image'

import { LogoWrapper } from './styles';
import logo from '../../assets/logo.png';

export const Logo = () => {
  return(
    <LogoWrapper>
      <Image priority={true} src={logo} alt="Logo da marca" />
    </LogoWrapper>
  )
}