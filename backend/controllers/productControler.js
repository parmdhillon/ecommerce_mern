import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc Get all the products
//@route GET /api/products
//@access PUBLIC
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (products) {
    res.json(products);
  } else {
    res.status(404).json({ message: 'Products not found' });
  }
});

//@desc Get particular product
//@route GET /api/products/:id
//@access PUBLIC
const getProductByID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product Not Found!');
  }
});

export { getProducts, getProductByID };
