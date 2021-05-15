import { FunctionComponent } from 'react';
import { Launch } from '../../utils/dataNormalisation';
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
      <Name>{name} </Name>
      <Details>
        <Date>{date_utc}</Date>
        <Rocket>Rocket Name</Rocket>
      </Details>
    </StyledListItem>
  );
};

export default ListItem;
