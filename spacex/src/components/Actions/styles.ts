import styled from 'styled-components';

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4.0625rem;
  margin-bottom: 0.75rem;
  justify-content: flex-end;
  align-items: stretch;
`;

export const StyledButton = styled.button`
  margin: 0;
  margin-left: 1rem;
  width: 10.5rem;
  color: #fff;
  font: inherit;
  font-weight: 700;
  font-size: 1rem;
  padding: 0;
  background-color: #215184;
  background-image: url(/sort.png);
  background-repeat: no-repeat;
  background-position: 95% 50%;
  border: none;
  border-radius: 2px;
  vertical-align: center;
  text-align: center;
`;

export const StyledSelect = styled.select`
  width: 9.75rem;
  background: #215184;
  color: #fff;
  font: inherit;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.625rem 1rem;
  border: none;
  background-color: #215184;
  background-image: url(/select.png);
  background-repeat: no-repeat;
  background-position: 95% 50%;
  border-radius: 2px;
  appearance: none;
`;
