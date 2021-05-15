import { FunctionComponent } from 'react';
import { Launch } from '../../utils/dataNormalisation';

interface ListProps {
  listItems: [Launch] | null;
}

const List: FunctionComponent<ListProps> = ({ listItems }) => {
  return (
    <ul>
      {listItems &&
        listItems.map((item: Launch) => (
          <li>
            {item.name} {item.date_utc}
          </li>
        ))}
    </ul>
  );
};

export default List;
