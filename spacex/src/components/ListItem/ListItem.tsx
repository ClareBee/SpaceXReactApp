import { FunctionComponent } from 'react';
import { Launch } from '../../utils/dataNormalisation';
import { StyledListItem } from './styles';

interface ListItemProps {
  item: Launch;
  index: number;
}

const ListItem: FunctionComponent<ListItemProps> = ({
  index,
  item: { name, date_utc },
}) => {
  return (
    <StyledListItem>
      <div>#{index + 1}</div>
      <div>{name} </div>
      <div>{date_utc}</div>
    </StyledListItem>
  );
};

export default ListItem;
