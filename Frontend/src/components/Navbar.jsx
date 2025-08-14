import './Navbar.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { LiquidButton } from './ui/shadcn-io/liquid-button'
import FlipLink from './ui/text-effect-flipper'


const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const { getCartItemsCount } = useCart()
  const navigate = useNavigate()

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout(); 
      navigate('/'); 
    }
  };

  return (
    <nav className='nav bg-black bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-20 fixed top-3 w-1/2 left-[25%] rounded-full justify-between'>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent text-2xl font-bold">
              E-Shop
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white border border-gray-500 px-2 py-1 rounded-lg hover:bg-green-500">
              <FlipLink>Home</FlipLink>
            </Link>
            
            {currentUser ? (
              <>
                <Link to="/cart" className="text-white hover:bg-purple-300 rounded-lg border border-gray-500 px-2 py-1 transition-colors relative">
                  <FlipLink>Cart</FlipLink>
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartItemsCount()}
                    </span>
                  )}
                </Link>
                <span className="text-white">Hello, {currentUser.name}</span>
                <button
                  onClick={handleLogout}
                  variant="destructive"
                  className="text-white rounded-lg transition-colors border border-gray-500 py-1 px-2 hover:bg-red-600"
                >
                  <FlipLink>Logout</FlipLink>
                </button>
              </>
            ) : (
              <>
              <Link to='/login' className="hover:bg-indigo-700 text-white rounded-lg border border-gray-500 py-1 px-2 transition-colors">
                <FlipLink>
                  Login
                </FlipLink>
                </Link>
                <Link to='/signup'  className="hover:bg-blue-700 text-white px-2 py-1 border border-gray-500 rounded-lg transition-colors">
                <FlipLink>
                  Sign Up
                </FlipLink>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;