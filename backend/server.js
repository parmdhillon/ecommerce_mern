import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoute from './routes/productsRoute.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Server is Running');
});

app.use('/api/products', productRoute);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Express Server is running in ${process.env.NODE_ENV} @ ${PORT}...`
  )
);
