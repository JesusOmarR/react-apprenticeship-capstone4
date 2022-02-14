import React from 'react'
import { ItemContainer } from './ItemList.styled'
import infoIcon from '../../assets/info.png'
/* interface ItemListProps {
  nameProduct: string;
  stock: number;
  price: number;
  images: [];
  description: string;
  mainImage: string;
  shortDescription: string;
} */
const ItemList = ({ item }) => {
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
