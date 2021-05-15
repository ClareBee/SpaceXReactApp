import { FunctionComponent, useState, useEffect, SetStateAction } from 'react';
import { Launch } from '../../utils/dataNormalisation';
import ListItem from '../ListItem/ListItem';
import { StyledList } from './styles';

interface ListProps {
  listItems: Launch[] | null;
}

const List: FunctionComponent<ListProps> = ({ listItems }) => {
  const renderItems = (items: any) =>
    items &&
    items.map((item: Launch, index: number) => (
      <ListItem item={item} index={index} key={item.name} />
    ));

  return <StyledList>{renderItems(listItems)}</StyledList>;
};

export default List;
