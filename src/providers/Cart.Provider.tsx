import React, { useState, useContext, useCallback, useEffect } from 'react'
import { storage } from '../utils/storage'

export const CartContext = React.createContext(null)

function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error(`Can't use "useNotes" without an AuthProvider!`)
  }
  return context
}

const CartProvider: React.FC<{}> = ({ children }) => {
  const [cart, setCart] = useState(storage.get('cart') || [])

  useEffect(() => {
    const cartItems = storage.get('cart') || []
    setCart(cartItems)
  }, [])

  const addItemToCart = useCallback((item) => {
    const cartItems = storage.get('cart') || []
    const {
      data: { data },
      qty,
    } = item

    let cartItem = {
      id: item.data.id,
      qty,
      data,
    }

    let isProductInCar = cartItems.find(
      (actualItem: any) => actualItem.id === cartItem.id
    )

    console.log(isProductInCar)
    if (isProductInCar) {
      const newItems = cartItems.map((actualItem: any) =>
        actualItem.id === cartItem.id ? cartItem : actualItem
      )
      storage.set('cart', newItems)
      setCart(newItems)
    } else {
      cartItems.push(cartItem)
      storage.set('cart', cartItems)
      setCart(cartItems)
    }
  }, [])

  const deleteCartItem = useCallback((item) => {
    console.log(item)
    const cartItems = storage.get('cart') || []

    const newItems = cartItems.filter((actualItem: any) => {
      return actualItem.id !== item.id
    })
    console.log(newItems)
    storage.set('cart', newItems)
    setCart(newItems)
  }, [])

  const updateCartItem = useCallback((item, value) => {
    console.log(item)
    const cartItems = storage.get('cart') || []
    const { data } = item

    let cartItem = {
      id: item.id,
      qty: value,
      data,
    }

    console.log(item)
    const newItems = cartItems.map((actualItem: any) =>
      actualItem.id === cartItem.id ? cartItem : actualItem
    )
    storage.set('cart', newItems)
    setCart(newItems)
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteCartItem,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { useCart }
export default CartProvider
