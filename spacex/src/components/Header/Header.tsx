import { FunctionComponent } from 'react';
import {
  StyledHeader,
  LogoContainer,
  Title,
  StyledLogo,
  RefreshButton,
} from './styles';
import Logo from '../../assets/spacex-logo.png';

interface HeaderProps {
  handleReload: () => void;
}
export const Header: FunctionComponent<HeaderProps> = ({ handleReload }) => {
  return (
    <StyledHeader>
      <LogoContainer>
        <StyledLogo src={Logo} alt="logo" />
        <Title>LAUNCHES</Title>
      </LogoContainer>
      <RefreshButton onClick={handleReload}>Reload Data</RefreshButton>
    </StyledHeader>
  );
};
