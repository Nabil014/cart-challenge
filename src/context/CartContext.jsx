/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'


export const CartContext = createContext(null);

const CartProvider = (props) => {

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const deleteItem = (item) => {
    const newCart = [...cart]
    const index = newCart.findIndex(product => product.id === item.id)
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0)


  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, deleteItem, total }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;