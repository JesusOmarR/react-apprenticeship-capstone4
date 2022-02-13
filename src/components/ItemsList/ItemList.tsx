import React from 'react'
import { ItemContainer } from './ItemList.styled'
import infoIcon from '../../assets/info.png'
interface ItemListProps {
  // prettier-ignore
  item: {
    name: string;
    price: number;
    images: [];
    description: string;
    mainimage: { url: string };
    shortDescription: string;
    category: { slug: string };
    short_description: string;
  }
}
const ItemList: React.FC<ItemListProps> = ({ item }) => {
  return (
    <ItemContainer>
      <img src={item.mainimage.url} />
      <div className="item-info">
        <h2>{item.name}</h2>
        <h3 className="item-name">$ {item.price}</h3>
      </div>
      <div className="more-info">
        <img src={infoIcon} />
        <div className="hidden-info">
          <p>
            <strong>Category: </strong>
            {item.category.slug}
          </p>
          <p>
            <strong>Description: </strong>
            {item.short_description}
          </p>
        </div>
      </div>
    </ItemContainer>
  )
}

export default ItemList
