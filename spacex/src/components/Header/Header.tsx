import {
  StyledHeader,
  LogoContainer,
  Title,
  StyledLogo,
  RefreshButton,
} from './styles';
import Logo from '../../assets/spacex-logo.png';

export const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <StyledLogo src={Logo} alt="logo" />
        <Title>LAUNCHES</Title>
      </LogoContainer>
      <RefreshButton>Reload Data</RefreshButton>
    </StyledHeader>
  );
};
