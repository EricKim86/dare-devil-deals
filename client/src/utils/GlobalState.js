import React, { createContext, useContext } from "react";
import { useExperiencesReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useExperiencesReducer({
    experiences: [],
    cart: [],
    cartOpen: false,
    activityLevels: [],
    currentActivityLevel: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };