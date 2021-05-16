import { FunctionComponent } from 'react';
import { Launch } from '../../types/types';
import { formatDate } from '../../utils/formatDate';
import { StyledListItem, Index, Name, Details, Date, Rocket } from './styles';

interface ListItemProps {
  item: Launch;
  index: number;
}

const ListItem: FunctionComponent<ListItemProps> = ({
  index,
  item: { rocket, id, name, date_utc },
}) => (
  <StyledListItem key={id}>
    <Index>#{index + 1}</Index>
    <Name>
      <p>{name}</p>
    </Name>
    <Details>
      <Date>{formatDate(date_utc)}</Date>
      <Rocket>{rocket}</Rocket>
    </Details>
  </StyledListItem>
);

export default ListItem;
