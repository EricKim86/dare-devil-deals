import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const styles = {
  main: {
    color: 'white',
    backgroundColor: '#204c39',
    width: '30rem',
    borderRadius: '10px',
    textAlign: 'center',
  },
}

const stripePromise = loadStripe('pk_test_51MXvksHlEIi5d2ZghAyq8i2sIP7glOJjKadtCLWBKVZgui2lV4VM0dk7fdbSsxLUR9LFedShbwL32pSM6FmZgAFW00faR3ecvm');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, experiences: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);


  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const experienceIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        experienceIds.push(item._id);
      }
    });

    getCheckout({
      variables: { experiences: experienceIds },
    });
  }


  return (
    <div style={styles.main} className="cart container">
      <Container>
        <br />
        <h2>Shopping Cart</h2>
        <br />
        {state.cart.length ? (
          <Container>
            <div>
              {state.cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}

              <div className="flex-row space-between">
                <Container>
                <br />
                  <Row>
                    <Col><strong>Total: ${calculateTotal()}</strong></Col>
                  </Row>
                  <br />
                  <Row>
                    <br />
                    <br />
                    <Col><Button onClick={submitCheckout}>Checkout</Button></Col>
                    <br />
                    <br />
                    <br />
                  </Row>
                </Container>
              </div>
            </div>
          </Container>
        ) : (
          <h3>
            You have not added any experiences to your shopping cart.
          </h3>
        )}
      </Container>
    </div>
  );
};

export default Cart;
