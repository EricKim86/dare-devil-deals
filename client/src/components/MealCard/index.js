import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const styles = {
  center: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  product: {
    width: '20rem',
    height: '100%',
    backgroundColor: 'white',
    margin: '10px 20px 10px 20px',
    borderRadius: '10px'
  },
  indent: {
    margin: '0px 0px 10px 0px',
    padding: '5px',
  },
  image: {
    objectFit: 'cover',
    maxHeight: '10rem',
    borderRadius: '10px 10px 0 0'
  },
  bottom: {
    alignItems: ''
  },
  green: {
    color: 'green',
  },
  white: {
    color: 'white',
  },
  topCard: {
    background: '#204c39',
    width: '100%',
    borderRadius: '10px'
  }
}

export default function MealCard(item) {
  const [state, dispatch] = useStoreContext();

  const {
    _id,
    image,
    name,
    points,
    price,
    percentage,
    description
  } = item

  const { cart } = state


  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    console.log(cart);
    console.log(_id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        experiences: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div style={styles.center} className='container row text-primary'>
      <div key={_id}>
        <Card style={styles.product} className='border border-tertiary'>
          <Card.Img style={styles.image} className='img-fluid' variant="top" src={`/images/meals/${image}`} alt='experience' />
          <Card.Body>
            <Container style={styles.topCard}>
              <Col><h3 style={styles.white}>{name}</h3></Col>
              <Col><p style={styles.white}>Points: {points}</p></Col>
            </Container>
            <Container>
              <Row>
              <Col><h5 style={styles.green}>Member Price: ${price}</h5></Col>
                <Col><h6>Enjoy {percentage}% off your entire meal.</h6></Col>
                <br />
                <br />
                <br />
              </Row>
              <Row>
                <Col><Button variant="primary" onClick={addToCart}><i className="fa fa-shopping-cart" aria-hidden="true"></i>  Add to Cart</Button></Col>
              </Row>
            </Container>
            <br />
            <Card.Text style={styles.font}>
              {description}
            </Card.Text>
          </Card.Body >
        </Card>
      </div>
    </div >
  );
}
