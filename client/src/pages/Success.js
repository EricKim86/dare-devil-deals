import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const experience = cart.map((item) => item._id);

      console.log(cart);
      console.log(experience);

      if (experience.length) {
        const { data } = await addOrder({ variables: { experience } });
        const experienceData = data.addOrder.experiences;

        experienceData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/profile');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <h1>Success!</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>You will now be redirected to your profile</h2>
    </div>
  );
}

export default Success;
