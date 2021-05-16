import styled, { css } from 'styled-components';

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4.0625rem;
  margin-bottom: 0.75rem;
  justify-content: flex-end;
  align-items: stretch;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const sharedBtnStyles = css`
  color: var(--brand-white, white);
  font: inherit;
  font-weight: 700;
  font-size: 1rem;
  background-color: var(--primary-blue, blue);
  background-repeat: no-repeat;
  background-position: 95% 50%;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  text-shadow: #545454 0px 0px 10px;
  :hover,
  :focus {
    background-color: var(--secondary-blue, darkblue);
  }
`;

export const StyledButton = styled.button`
  ${sharedBtnStyles}
  margin: 0;
  margin-left: 1rem;
  width: 10.5rem;
  padding: 0;
  background-image: url(/sort.png);
  vertical-align: center;
  text-align: center;
`;

export const StyledSelect = styled.select`
  ${sharedBtnStyles}
  width: 9.75rem;
  padding: 0.625rem 1rem;
  background-image: url(/select.png);
  appearance: none;
`;
