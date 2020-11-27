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
    TaxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.Items.lenght === 0) {
    res.status(400);
    throw new Error('No Order Items');
    return;
  } else {
    const order = new Order.create({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      TaxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

export { addOrderItems };
