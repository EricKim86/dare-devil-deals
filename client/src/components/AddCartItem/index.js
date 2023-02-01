import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY, UPDATE_CART_POINTS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";