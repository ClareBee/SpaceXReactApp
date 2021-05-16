import { FunctionComponent } from 'react';
import { Container } from './styles';

const Layout: FunctionComponent = ({ children }) => {
  return <Container role="main">{children}</Container>;
};

export default Layout;
