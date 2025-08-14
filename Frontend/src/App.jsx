import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import PaymentSuccess from './pages/Payment'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <>
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-indigo-950">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/src/pages/Payment" element={<PaymentSuccess />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
    </>
  )
}

export default App;