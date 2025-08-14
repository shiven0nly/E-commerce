const express = require('express');
const Product = require('../models/Product');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add product (protected)
router.post('/', protect, async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    
    const product = new Product({
      name,
      price,
      description,
      image,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
