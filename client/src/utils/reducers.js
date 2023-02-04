import { useReducer } from 'react';
import {
    UPDATE_EXPERIENCES,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    CLEAR_CART,
    TOGGLE_CART,
    UPDATE_ACTIVITY_LEVEL,
    UPDATE_CURRENT_ACTIVITY_LEVEL,
    // UPDATE_CART_POINTS,
    // UPDATE_USER_POINTS,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_EXPERIENCES:
            return {
                ...state,
                experiences: [...action.experiences],
            };

        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.experiences],
            };

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.experiences],
            };

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map((experiences) => {
                    if (action._id === experiences._id) {
                        experiences.purchaseQuantity = action.purchaseQuantity;
                    }
                    return experiences;
                }),
            };

        case REMOVE_FROM_CART:
            let newState = state.cart.filter((experiences) => {
                return experiences._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState,
            };

        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: [],
            };

        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen,
            };

        case UPDATE_ACTIVITY_LEVEL:
            return {
                ...state,
                activityLevels: [...action.activityLevels],
            };

        case UPDATE_CURRENT_ACTIVITY_LEVEL:
            return {
                ...state,
                currentActivityLevel: action.currentActivityLevel
            }


        default:
            return state;
    }
}

export function useExperiencesReducer(initialState) {
    return useReducer(reducer, initialState);
}