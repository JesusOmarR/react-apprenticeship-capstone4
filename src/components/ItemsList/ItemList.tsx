import React from 'react'
import { ItemContainer } from './ItemList.styled'
import infoIcon from '../../assets/info.png'
import addToCart from '../../assets/add-to-cart.png'
import { useHistory } from 'react-router-dom'

interface ItemListProps {
  // prettier-ignore
  item: {
    id: string;
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
  const history = useHistory()

  return (
    <ItemContainer onClick={() => history.push(`/products/${item.id}`)}>
      <img src={item.mainimage.url} />
      <div className="item-info">
        <div className="info">
          <h2>{item.name}</h2>
          <h3 className="item-name">$ {item.price}</h3>
        </div>

        <div className="cart">
          <button className="cart-btn">
            <img src={addToCart} />
          </button>
        </div>
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
            {item.short_description.substring(0, 250)}
          </p>
        </div>
      </div>
    </ItemContainer>
  )
}

export default ItemList
