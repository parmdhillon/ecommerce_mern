import React from 'react';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';

const Product = (props) => {
  return (
    <Card style={{ height: '93%' }} className="my-3 p-3 rounded">
      <a href={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </a>
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
