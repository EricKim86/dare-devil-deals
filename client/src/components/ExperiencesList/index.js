import React, { useEffect, useState } from 'react';
import ExperienceCard from '../ExperienceCard';
// import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_EXPERIENCES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_EXPERIENCES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/spinner.gif';
// import { Experiences } from './server/models/experiences.js';

function ExperienceList() {
  const [state, dispatch] = useStoreContext();

  const [currentActivityLevel, setCurrentActivityLevel] = useState(2);

  const { loading, data, error } = useQuery(QUERY_EXPERIENCES);
  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_EXPERIENCES,
        experiences: data.experiences,
      });
      data.experiences.forEach((experience) => {
        idbPromise('experiences', 'put', experience);
      });
    } else if (!loading) {
      idbPromise('experiences', 'get').then((experiences) => {
        dispatch({
          type: UPDATE_EXPERIENCES,
          experiences: experiences,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    // if (!currentActivityLevel) {
    //   return state.experiences;
    // }
    console.log(state.experiences);
    return state.experiences.filter(
      (experiences) => {
        console.log(experiences);
        return experiences.activityLevel === currentActivityLevel
    }
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.experiences ? (
        <div className="flex-row">
          {filterProducts().map((Experiences) => (
            <ExperienceCard
              key={Experiences._id}
              _id={Experiences._id}
              image={Experiences.image}
              name={Experiences.name}
              price={Experiences.price}
              quantity={Experiences.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default ExperienceList;