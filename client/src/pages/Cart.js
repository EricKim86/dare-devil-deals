import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_EXPERIENCES,
} from '../utils/actions';
import { QUERY_EXPERIENCES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentExperience, setCurrentExperience] = useState({});

  const { loading, data } = useQuery(QUERY_EXPERIENCES);

  const { experiences, cart } = state;

  useEffect(() => {
    // already in global store
    if (experiences.length) {
      setCurrentExperience(experiences.find((experiences) => experiences._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_EXPERIENCES,
        products: data.products,
      });

      data.experiences.forEach((experiences) => {
        idbPromise('products', 'put', experiences);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedExperiences) => {
        dispatch({
          type: UPDATE_EXPERIENCES,
          experiences: indexedExperiences,
        });
      });
    }
  }, [experiences, data, loading, dispatch, id]);

  // const addToCart = () => {
  //   const itemInCart = cart.find((cartItem) => cartItem._id === id);
  //   if (itemInCart) {
  //     dispatch({
  //       type: UPDATE_CART_QUANTITY,
  //       _id: id,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
  //     });
  //     idbPromise('cart', 'put', {
  //       ...itemInCart,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
  //     });
  //   } else {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       product: { ...currentExperience, purchaseQuantity: 1 },
  //     });
  //     idbPromise('cart', 'put', { ...currentExperience, purchaseQuantity: 1 });
  //   }
  // };

  // const removeFromCart = () => {
  //   dispatch({
  //     type: REMOVE_FROM_CART,
  //     _id: currentExperience._id,
  //   });

  //   idbPromise('cart', 'delete', { ...currentExperience });
  // };

  return (
    <>
      {currentExperience && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Products</Link>
{/* 
          <h2>{currentExperience.name}</h2>

          <p>{currentExperience.description}</p>

          <p>
            <strong>Price:</strong>${currentExperience.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentExperience._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentExperience.image}`}
            alt={currentExperience.name}
          /> */}
        </div>
      ) : null}
      <Cart />
    </>
  );
}

export default Detail;
