import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const styles = {
  padding: {
    padding: '10px'
  },
  width: {
    width: '3rem'
  },
}


const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  }

  return (
    <div>
      <div className='flex-row d-flex justify-content-between'>
        <div><h4>{item.name}</h4></div>
        <div><h4>${item.price}</h4></div>
        <div>
          <span> Qty:</span>
          <input style={styles.width}
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
