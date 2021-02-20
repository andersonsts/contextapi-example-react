import { memo } from 'react';
import { ItemInterface } from '../../context';

import { Container } from './styles';

interface ItemProps {
  item: ItemInterface;
}

const Item = ({ item }: ItemProps) => {
  return (
    <Container>
      <span>
        {item.name}
      </span>
      <span>
        {item.price}
      </span>
    </Container>
  )
}

export default memo(Item);