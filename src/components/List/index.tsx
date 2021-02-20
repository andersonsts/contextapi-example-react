import { memo } from "react";

import { useData } from "../../context";
import { ItemInterface } from '../../context';

import Item from "../Item";

import { Container } from "./styles";

const List = () => {
  const { items } = useData()

  return (
    <Container>
      {console.log('lista')}
      {items.map((item: ItemInterface) => (
        <Item 
          key={String(item.name)} 
          item={item} 
        />
      ))}
    </Container>
  )
}

export default memo(List);