import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ErrorMsg = styled.h1`
  font-family: 'Brandon Grotesque', Arial, Helvetica, sans-serif;
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMsg>Oops, Something went wrong.</ErrorMsg>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
