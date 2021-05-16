import { FunctionComponent, useEffect, useState } from 'react';
import {
  StyledHeader,
  LogoContainer,
  Title,
  StyledLogo,
  RefreshButton,
  Spinner,
} from './styles';
import Logo from '../../assets/spacex-logo.png';
import Reload from '../../assets/icon/refresh.png';

interface HeaderProps {
  handleReload: () => void;
  reload: boolean;
}
export const Header: FunctionComponent<HeaderProps> = ({
  handleReload,
  reload,
}) => {
  const [reloading, setReloading] = useState(false);
  useEffect(() => {
    triggerSpin(reload);
  }, [reload]);

  const triggerSpin = (reload: boolean) => {
    console.log('reload');
    setReloading(true);
    setTimeout(() => {
      setReloading(false);
    }, 2000);
  };
  console.log('reloading', reloading);
  return (
    <StyledHeader>
      <LogoContainer>
        <StyledLogo src={Logo} alt="logo" />
        <Title>LAUNCHES</Title>
      </LogoContainer>
      <RefreshButton onClick={handleReload}>
        Reload Data
        <Spinner src={Reload} alt="spinner" reloading={reloading} />
      </RefreshButton>
    </StyledHeader>
  );
};
