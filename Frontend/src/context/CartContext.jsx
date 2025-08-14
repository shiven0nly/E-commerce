import React, { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from './AuthContext'

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      fetchCart()
    } else {
      setCartItems([])
    }
  }, [currentUser])

  const fetchCart = async () => {
    try {
      const response = await axios.get('/api/cart')
      setCartItems(response.data)
    } catch (error) {
      console.error('Error fetching cart:', error)
    }
  }

  const addToCart = async (productId, quantity = 1) => {
    try {
      const response = await axios.post('/api/cart', { productId, quantity })
      setCartItems(response.data)
    } catch (error) {
      console.error('Error adding to cart:', error)
      throw error
    }
  }

  const removeFromCart = async (itemId) => {
    try {
      const response = await axios.delete(`/api/cart/${itemId}`)
      setCartItems(response.data)
    } catch (error) {
      console.error('Error removing from cart:', error)
    }
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.product?.price || 0) * item.quantity, 0)
  }

  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    getCartTotal,
    getCartItemsCount,
    fetchCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}