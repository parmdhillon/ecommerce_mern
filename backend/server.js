import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoute from './routes/productsRoute.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is Running');
});

app.use('/api/products', productRoute);

app.use('/api/users', userRoutes);

app.use('/api/orders', orderRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Express Server is running in ${process.env.NODE_ENV} @ ${PORT}...`
  )
);
