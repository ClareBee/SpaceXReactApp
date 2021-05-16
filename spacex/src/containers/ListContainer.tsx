import { FunctionComponent } from 'react';
import { StyledListContainer } from './styles';

const ListContainer: FunctionComponent = ({ children }) => {
  return <StyledListContainer>{children}</StyledListContainer>;
};

export default ListContainer;
