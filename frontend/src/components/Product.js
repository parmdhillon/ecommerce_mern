import React from 'react';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = (props) => {
  return (
    <Card style={{ height: '93%' }} className="my-3 p-3 rounded">
      <Link to={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            rating={props.product.rating}
            numReviews={props.product.numReviews}
          />
        </Card.Text>
        <Card.Text as="h5">
          <div className="my-3">${props.product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
