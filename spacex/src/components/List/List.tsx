import { FunctionComponent } from 'react';
import { Launch } from '../../utils/dataNormalisation';
import ListItem from '../ListItem/ListItem';
import { StyledList } from './styles';

interface ListProps {
  listItems: [Launch] | null;
}

const List: FunctionComponent<ListProps> = ({ listItems }) => {
  return (
    <StyledList>
      {listItems &&
        listItems.map((item: Launch, index) => (
          <ListItem item={item} index={index} />
        ))}
    </StyledList>
  );
};

export default List;
