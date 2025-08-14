import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import HeaderSlider from '../components/HeaderSlider'
import Footer from './../components/Footer';

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white text-xl">Loading products...</div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4 my-20">
          Welcome to E-Shop
        </h1>
        <p className="text-xl text-red-200">
          Discover amazing products at unbeatable prices
        </p>
      </div>
      <HeaderSlider />
      &nbsp;
      {products.length === 0 ? (
        <div className="text-center">
          <p className="text-white text-xl">No products available</p>
          <p className="text-gray-300 mt-2">Run the seed script to add sample products</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      &nbsp;
      &nbsp;
      <Footer />
    </div>
  )
}

export default Home;