import styled, { css } from 'styled-components';
import { sharedBtnStyles } from '../Actions/styles';

export const StyledHeader = styled.header`
  width: 100%;
  height: 3.886875rem;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 17.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 2.074375rem;
  margin-left: 2.5575rem;
`;

export const StyledLogo = styled.img`
  width: 70%;
  height: 1.375rem;
`;

export const Title = styled.h1`
  color: var(--brand-grey, grey);
  font-weight: 400;
  letter-spacing: 1.09px;
  padding-top: 0.5rem;
  margin-left: -1rem;
`;

interface SpinnerProps {
  reloading: boolean;
}

export const RefreshButton = styled.button`
  ${sharedBtnStyles}
  height: 2.6875rem;
  width: 8.375rem;
  margin-top: 1.5rem;
  border-top-left-radius: 20.5px;
  border-bottom-left-radius: 20.5px;
`;

export const Spinner = styled.img<SpinnerProps>((props) => {
  return css`
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
    margin-left: 0.25rem;
    animation-name: ${props.reloading ? 'spinner' : ''};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
  `;
});
