import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { currentUser } = useAuth()
  const { addToCart } = useCart()

  const handleAddToCart = async () => {
    if (!currentUser) {
      alert('Please login to add items to cart')
      return
    }

    try {
      await addToCart(product._id)
      alert('Product added to cart!')
    } catch (error) {
      alert('Error adding product to cart')
    }
  }

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white border-opacity-20 z-10">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 z-10 transition-transform duration-300"
        />
      </Link>
      
      <div className="p-4 z-10">
        <Link to={`/product/${product._id}`}>
          <h3 className="text-white text-lg font-semibold mb-2 hover:text-purple-300 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-300 text-sm mb-3 line-clamp-2 z-10">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center z-10">
          <span className="text-purple-300 text-xl font-bold">
            ₹{product.price}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 z-10"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;