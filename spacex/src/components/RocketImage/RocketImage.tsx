import { FunctionComponent } from 'react';
import RocketLogo from '../../assets/img/launch-home.png';
import { StyledRocketContainer, StyledRocketImage } from './styles';

const RocketImage: FunctionComponent = () => (
  <StyledRocketContainer>
    <StyledRocketImage src={RocketLogo} alt="Image of SpaceX Launch" />;
  </StyledRocketContainer>
);

export default RocketImage;
