import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

function Checkout() {
    const {cartItems, addItemToCart, removeItemToCart} = useContext(CartContext)
  return (
    <div>
    <h1>I am a check out page</h1>
    <div>
    {
        cartItems.map((cartItem) => {
            const {id, name , quantity} = cartItem
            return (
                <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
                <span onClick={() => addItemToCart(cartItem)}>increment</span>
                </div>
            )
        })
    }
    </div>
    </div>
  )
}

export default Checkout