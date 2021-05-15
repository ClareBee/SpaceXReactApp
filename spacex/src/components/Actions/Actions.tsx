import React, { FunctionComponent } from 'react';

interface ActionProps {
  filterLaunches: (year: number) => void;
  sortLaunches: (flag: string) => void;
}

const Actions: FunctionComponent<ActionProps> = ({
  filterLaunches,
  sortLaunches,
}) => {
  const handleChange = () => {
    filterLaunches(2008);
  };
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    sortLaunches('asc');
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option>1999</option>
        <option>2000</option>
      </select>

      <button onClick={(e) => handleClick(e)}>Sort</button>
    </div>
  );
};

export default Actions;
