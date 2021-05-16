import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 1rem 5rem 1rem 2.49375rem;
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledListContainer = styled.div`
  width: 55%;
  margin-right: 1rem;
  @media (max-width: 768px) {
    width: 95%;
    margin: 0.25rem;
  }
`;
