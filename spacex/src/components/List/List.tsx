import { FunctionComponent } from 'react';
import { Launch } from '../../types/types';
import ListItem from '../ListItem/ListItem';
import { StyledList } from './styles';

interface ListProps {
  listItems: Launch[] | null;
}

const List: FunctionComponent<ListProps> = ({ listItems }) => {
  const renderItems = (items: Launch[] | null) =>
    items && items.length > 0 ? (
      items.map((item: Launch, index: number) => (
        <ListItem item={item} index={index} key={item.name} />
      ))
    ) : (
      <div>No launches available</div>
    );

  return (
    <StyledList role="Launches" data-testid="launches">
      {renderItems(listItems)}
    </StyledList>
  );
};

export default List;
