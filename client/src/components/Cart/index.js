import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import AddCartItem from '../AddCartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';

const styles = {
    cart: {

    },
    close: {

    }
}

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

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
        dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
      }
  
      if (!state.cart.length) {
        getCart();
      }
    }, [state.cart.length, dispatch]);
  
    function toggleCart() {
      dispatch({ type: TOGGLE_CART });
    }
  
    function calculateTotal() {
      let sum = 0;
      state.cart.forEach((item) => {
        sum += item.price * 1;
      });
      return sum.toFixed(2);
    }

    function submitCheckout() {
      const productIds = [];
  
      state.cart.forEach((item) => {
        for (let i = 0; i < 1; i++) {
          productIds.push(item._id);
        }
      });
  
      getCheckout({
        variables: { products: productIds },
      });
    }
  
    if (!state.cartOpen) {
      return (
        <div className="cart-closed" onClick={toggleCart}>
          <span role="img" aria-label="shopping">
            🛒
          </span>
        </div>
      );
    }
  
    return (
      <div className="cart" style={styles.cart}>
        <div className="close" style={styles.close} onClick={toggleCart}>
          [close]
        </div>
        <h2>Shopping Cart</h2>
        {state.cart.length ? (
          <div>
            {state.cart.map((item) => (
              <AddCartItem key={item._id} item={item} />
            ))}
  
            <div className="flex-row space-between">
              <strong>Total: ${calculateTotal()}</strong>

              {Auth.loggedIn() ? (
                <button onClick={submitCheckout}>Checkout</button>
              ) : (
                <span>(log in to check out)</span>
              )}
            </div>
          </div>
        ) : (
          <h3>
            <span role="img" aria-label="sad">
              😢
            </span>
            Add an experience to your cart!
          </h3>
        )}
      </div>
    );
  };
  
  export default Cart;
  