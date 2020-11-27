import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//@desc Create new order
//@route POST /api/orders
//@access PRIVATE
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No Order Items');
    return;
  } else {
    const createdOrder = await Order.create({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    res.status(201).json(createdOrder);
  }
});

export { addOrderItems };
