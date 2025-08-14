const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    name: "AirPods 4",
    price: 17900,
    description: "High-quality wireless earphones with noise cancellation",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-select-202409_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=WnVKRVRUTFVsYThXaWkydWViL1Q3ZDZGTE9TV3RDcGJJclBqdUtzdTJYYjNHc3NlSmU2dzJyR1kxZEwyTE1neUJkRlpCNVhYU3AwTldRQldlSnpRa0NZZXAxWFNjRXhITDI1RVE5YVpyU0E",
  },
  {
    name: "Beats Studio Pro",
    price: 37900,
    description: "High-quality wireless headphones- Sandstone",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SmFOSTFzWmdkMW1XWjFUWXBDRzdBd2tuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90T0huV2F0aExud1Z0YndiMUgwNXJZQnc",
  },
  {
    name: "Iphone 16 plus",
    price: 76900,
    description: "Latest Iphone with advanced camera features",
    image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309707_0_zm3dxo.png?tr=w-540",
  },
  {
    name: "Macbook Pro",
    price: 169900,
    description: "Powerful Laptop for work and gaming",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202410?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=dzRRdVl2UHpmd3BrL2dpaGRDY2RKL0tDcDdIN2J5MlRJbDZwdXNUam1wUDJ0SUdrYS9VNndoSUR6SjE2NTZ4Q3dzUlMrL0tMOEdKdERZZEhaV2pBNG5MYXhobkxkNHkydGdPaXdJd0ZJRmorbGwzUVNwZEFpcE1WQU1wNTVjU1c",
  },
  {
    name: "T-shirts",
    price: 499,
    description: "Comfy t-shirts both for men and women",
    image: "https://img.freepik.com/free-vector/vintage-tigers-school-tee-template_742173-33315.jpg?uid=R202534338&ga=GA1.1.1514194566.1733938835&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Shirts",
    price: 1299,
    description: "Classy Shirts both for men and women",
    image: "https://image.hm.com/assets/hm/92/3f/923f3e22c148f002264b4ba34cf545f09cf84cb5.jpg?imwidth=1260",
  },
  {
    name: "Jeans",
    price: 2999,
    description: "Denim style loose jeans",
    image: "https://image.hm.com/assets/hm/39/f5/39f50424ff1a64c55510f22f1426d3a3b684c93f.jpg?imwidth=1060",
  },
  {
    name: "Chinos",
    price: 599,
    description: "Classy Chinos for Men",
    image: "https://image.hm.com/assets/hm/1a/1d/1a1dd20e60745fbbb9957037a6e99139b5553bdb.jpg?imwidth=1060",
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();