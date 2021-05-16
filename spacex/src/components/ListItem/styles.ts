import styled from 'styled-components';

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1.125rem 1rem 1.0625rem 2rem;
  color: #545454;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 0.15rem;
  margin-bottom: 0.5rem;
`;

export const Index = styled.span`
  width: 4.75rem;
  font-size: 2.5rem;
  font-weight: 500;
`;

export const Name = styled.div`
  width: 28.375rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.75rem;
`;

export const Details = styled.div`
  width: 6.3125rem;
  display: flex;
  flex-direction: column;
`;

export const Date = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  margin-bottom: 0.5rem;
`;

export const Rocket = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: right;
`;
