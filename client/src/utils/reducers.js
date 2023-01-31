import { useReducer } from 'react';
import {
    UPDATE_ACTIVITIES,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    CLEAR_CART,
    TOGGLE_CART,
    UPDATE_CART_XP,
    UPDATE_USER_XP,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_ACTIVITIES:
            return {
                ...state,
                activities: [...action.activities],
            };

        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.activity],
            };

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.activities],
            };

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map((activity) => {
                    if (action._id === activity._id) {
                        activity.purchaseQuantity = action.purchaseQuantity;
                    }
                    return activity;
                }),
            };

        case REMOVE_FROM_CART:
            let newState = state.cart.filter((activity) => {
                return activity._id !== action._id;
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

        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory,
            };

        case UPDATE_CART_XP:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map((activity) => {
                    if (action.XP === activity.XP) {
                        activity.XP = action.XP;
                    }
                    return activity.XP;
                })
            }
            
        case UPDATE_USER_XP:
            return {count: state.count + activity.XP}

        default:
            return state;
    }
}

export function useActivityReducer(initialState) {
    return useReducer(reducer, initialState);
}