import React, { FunctionComponent, useState } from 'react';
import { StyledButton } from './styles';

interface ActionProps {
  filterLaunches: (year: number) => void;
  sortLaunches: (flag: string) => void;
}

const Actions: FunctionComponent<ActionProps> = ({
  filterLaunches,
  sortLaunches,
}) => {
  const [ascending, setAscending] = useState(true);
  const ascendingText = 'Sort By Ascending';
  const descendingText = 'Sort By Descending';

  const handleChange = () => {
    filterLaunches(2008);
  };

  const toggleButton = () => {
    setAscending(!ascending);
    sortLaunches(ascending ? 'asc' : 'des');
  };
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    toggleButton();
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option>1999</option>
        <option>2000</option>
      </select>

      <StyledButton onClick={(e) => handleClick(e)}>
        {ascending ? ascendingText : descendingText}
      </StyledButton>
    </div>
  );
};

export default Actions;
