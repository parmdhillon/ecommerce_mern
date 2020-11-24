import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useSelector, useDispatch } from 'react-redux';
import { productDetail } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetailSelector = useSelector((state) => state.productDetail);

  const { loading, error, product } = productDetailSelector;

  useEffect(() => {
    dispatch(productDetail(match.params.id));
  }, [dispatch, match.params.id]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Link to="/" className="btn btn-light">
            Go Back
          </Link>
          <Row className="my-3">
            <Col md={6}>
              <Image
                className="rounded"
                src={product.image}
                alt={product.name}
                fluid
              />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5>{product.name}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>${product.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Availability:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty.</Col>
                        <Col>
                          <FormControl
                            as="select"
                            onChange={(e) => {
                              setQty(e.target.value);
                            }}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </FormControl>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      className="btn-block"
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
