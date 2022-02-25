import React from 'react'
import { Button } from 'react-bootstrap'
import { useCart } from '../../providers'
import { CartTable, CartContainer } from './ShoppingCart.styled'
import { useHistory } from 'react-router-dom'

function ShoppingCart() {
  const { cart, deleteCartItem, updateCartItem } = useCart()

  const onChangeQty = (item: any, value: any) => {
    updateCartItem(item, value)
    console.log(value)
  }

  const history = useHistory()

  return (
    <CartContainer>
      <CartTable>
        <tr>
          <th>image</th>
          <th>Name</th>
          <th>Unit Price</th>
          <th>Qty</th>
          <th>SubTotal</th>
          <th>Delete</th>
        </tr>
        {cart.map((item: any) => (
          <tr key={item.id}>
            <td>
              <img src={item.data.mainimage.url} />
            </td>
            <td>{item.data.name}</td>
            <td>$ {item.data.price}</td>
            <td>
              <input
                onChange={(e) => onChangeQty(item, e.target.value)}
                type="number"
                value={item.qty}
                max={item.data.stock}
              />
            </td>
            <td>$ {item.qty * item.data.price}</td>
            <td>
              <Button onClick={() => deleteCartItem(item)}>Delete</Button>
            </td>
          </tr>
        ))}
      </CartTable>
      <h2>
        Total: $
        {cart.reduce(
          (previousValue: number, currentValue: any) =>
            previousValue + currentValue.qty * currentValue.data.price,
          0
        )}
      </h2>
      <Button className="checkout" onClick={() => history.push('/checkout')}>
        Proceed To checkout
      </Button>
    </CartContainer>
  )
}

export default ShoppingCart
