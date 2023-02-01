import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY, UPDATE_CART_POINTS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });

    };

    const onChange = (event) => {
        const value = event.target.value;
        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id
            });
            idbPromise('cart', 'delete', { ...item });

        } else {
            dispatch(
                {
                    type: UPDATE_CART_QUANTITY,
                    _id: item._id,
                    points: parseInt(value)
                }
            );
            idbPromise('cart', 'put', { ...item, points: parseInt(value) });

        }
    }

    return (
        <div className="flex-row">
            <div>
                <img
                    src={`/images/${item.image}`}
                    alt={`/images/${item.alt}`}
                />
            </div>
            <div>
                <div>{item.name}, ${item.price}</div>
                <div>Points: {item.points}</div>
                <div>
                    <span>Remove:</span>
                    <span
                        role="img"
                        aria-label="sad"
                        onClick={() => removeFromCart(item)}
                    >
                        😢
                    </span>
                </div>
            </div>
        </div>
    )
}