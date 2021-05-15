import { FunctionComponent } from 'react';
import { Launch } from '../../utils/dataNormalisation';
import { formatDate } from '../../utils/formatDate';
import { StyledListItem, Index, Name, Details, Date, Rocket } from './styles';

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
      <Index>#{index + 1}</Index>
      <Name>
        <p>{name}</p>
      </Name>
      <Details>
        <Date>{formatDate(date_utc)}</Date>
        <Rocket>Rocket</Rocket>
      </Details>
    </StyledListItem>
  );
};

export default ListItem;
