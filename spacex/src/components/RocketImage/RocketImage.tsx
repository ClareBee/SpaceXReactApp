import { FunctionComponent } from 'react';
import RocketLogo from '../../assets/img/launch-home.png';
import { StyledRocketContainer, StyledRocketImage } from './styles';

const RocketImage: FunctionComponent = () => {
  return (
    <StyledRocketContainer>
      <StyledRocketImage src={RocketLogo} />;
    </StyledRocketContainer>
  );
};

export default RocketImage;
