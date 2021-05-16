import styled from 'styled-components';

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
  color: #545454;
  font-weight: 400;
  letter-spacing: 1.09px;
  padding-top: 0.5rem;
  margin-left: -1rem;
`;

export const RefreshButton = styled.button`
  height: 2.6875rem;
  width: 8.375rem;
  margin-top: 1.5rem;
  background: #215184;
  color: #fff;
  font: inherit;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  background-color: #215184;
  background-image: url(/refresh.png);
  background-repeat: no-repeat;
  background-position: 95% 50%;
  border-top-left-radius: 20.5px;
  border-bottom-left-radius: 20.5px;
`;
