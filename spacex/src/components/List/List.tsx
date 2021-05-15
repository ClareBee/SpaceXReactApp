import { FunctionComponent } from 'react';
import { Launch } from '../../utils/dataNormalisation';
import { StyledList } from './styles'

interface ListProps {
  listItems: [Launch] | null;
}

const List: FunctionComponent<ListProps> = ({ listItems }) => {
  return (
    <StyledList>
      {listItems &&
        listItems.map((item: Launch) => (
          <li>
            {item.name} {item.date_utc}
          </li>
        ))}
    </StyledList>
  );
};

export default List;
