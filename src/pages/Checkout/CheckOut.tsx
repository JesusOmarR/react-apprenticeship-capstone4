import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useCart } from '../../providers'
import { UserForm, CheckOutContainer, MainContainer } from './CheckOut.styled'
import { useHistory } from 'react-router-dom'

export default function CheckOut() {
  const [customer, setCustomer] = useState<any>({
    name: '',
    email: '',
    zip: '',
    notes: '',
  })

  const { name, email, zip, notes } = customer

  const { cart } = useCart()

  const history = useHistory()

  const onChange = (e: any) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value })
  }
  return (
    <MainContainer>
      <h1>CheckOut</h1>
      <CheckOutContainer>
        <div>
          <h2>Customer Data</h2>
          <UserForm>
            <input
              onChange={onChange}
              placeholder="name"
              value={name}
              name="name"
            />
            <input
              onChange={onChange}
              placeholder="email"
              value={email}
              name="email"
            />
            <input
              onChange={onChange}
              placeholder="zip"
              value={zip}
              name="zip"
            />
            <textarea
              onChange={onChange}
              placeholder="notes"
              value={notes}
              name="notes"
            />
          </UserForm>
        </div>

        <table>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
          {cart.map((item: any) => (
            <tr key={item.id}>
              <td>{item.data.name}</td>
              <td> {item.qty}</td>
              <td>$ {item.qty * item.data.price}</td>
            </tr>
          ))}
        </table>
      </CheckOutContainer>
      <Button onClick={() => history.push('/cart')}>Place order</Button>
    </MainContainer>
  )
}
