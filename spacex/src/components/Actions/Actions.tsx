import React, { FunctionComponent, useState, useEffect } from 'react';
import { Launch } from '../../types/types';
import { ActionsContainer, StyledButton, StyledSelect } from './styles';

interface ActionProps {
  filterLaunches: (year: number) => void;
  sortLaunches: (items: Launch[] | [], flag: string) => void;
  items: Launch[] | [];
  flag: string;
}

const Actions: FunctionComponent<ActionProps> = ({
  filterLaunches,
  sortLaunches,
  items,
  flag,
}) => {
  const [selectedYear, setSelectedYear] = useState('0');
  const ascendingText = 'Sort by Ascending';
  const descendingText = 'Sort by Descending';

  useEffect(() => {
    setSelectedYear('0');
  }, [flag]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target?.value);
    filterLaunches(Number(e.target.value));
  };

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    console.log('flag', flag);
    sortLaunches(items, flag);
  };

  const selectOptions = () => {
    const years = [];
    for (let i = 2000; i < 2030; i++) {
      years.push(i);
    }
    return years.map((year) => (
      <option value={year} key={year}>
        {year}
      </option>
    ));
  };

  return (
    <ActionsContainer>
      <StyledSelect onChange={handleChange} value={selectedYear}>
        <option value="undefined">Filter by Year</option>
        {selectOptions()}
      </StyledSelect>

      <StyledButton onClick={(e) => handleClick(e)}>
        {flag === 'asc' ? ascendingText : descendingText}
      </StyledButton>
    </ActionsContainer>
  );
};

export default Actions;
