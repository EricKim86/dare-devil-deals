import React, { useEffect, useState } from 'react';
import MealCard from '../MealCard';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_EXPERIENCES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_EXPERIENCES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import Button from 'react-bootstrap/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'

const styles = {
  space: {
    margin: '10px',
  },
}

function MealList() {
  const [state, dispatch] = useStoreContext();

  const [currentActivityLevel, setCurrentActivityLevel] = useState(4);

  const { loading, data, error } = useQuery(QUERY_EXPERIENCES);
  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data) {
      console.log(data);
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
    return state.experiences.filter(
      (experiences) => experiences.activityLevel === currentActivityLevel
    );
  }

  return (
    <div className="my-2">
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(7)}><i className="fas fa-pepper-hot"></i> Mexican</Button>
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(4)}><i className="fas fa-hamburger"></i> American</Button>
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(5)}><i className="fas fa-pizza-slice"></i> Italian</Button>
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(6)}><i className="fas fa-seedling"></i> Chinese</Button>
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(8)}><i className="fa-solid fa-cheese"></i> French</Button>
      {state.experiences.length ? (
        <div className="flex-row">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className='mySwiper'
            scrollbar={true}
            slidesPerView={3}
            spaceBetween={5}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
            }}
          >
            {filterProducts().map((Experiences) => (
              <SwiperSlide>
                <MealCard 
                  key={Experiences._id}
                  _id={Experiences._id}
                  image={Experiences.image}
                  name={Experiences.name}
                  price={Experiences.price}
                  percentage={Experiences.percentage}
                  points={Experiences.points}
                  description={Experiences.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
  );
}

export default MealList;