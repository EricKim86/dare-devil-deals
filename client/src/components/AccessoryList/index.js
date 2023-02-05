import React, { useEffect, useState } from 'react';
import AccessoryCard from '../AccessoryCard';
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

function AccessoryList() {
  const [state, dispatch] = useStoreContext();

  const [currentActivityLevel, setCurrentActivityLevel] = useState(11);

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
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(9)}><i className="fas fa-shopping-bag"></i> Food and Grocery</Button>
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(10)}><i className="fa-solid fa-shirt"></i> Clothing</Button>
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(11)}><i className="fa-solid fa-basketball"></i> Sports and Outdoors</Button>
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(12)}><i className="fa fa-question-circle"></i> Misc</Button>

      {state.experiences.length ? (
        <div className="flex-row">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className='mySwiper'
            scrollbar={true}
            slidesPerView={4}
            spaceBetween={5}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1100: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 5,
              }
            }}
          >
            {filterProducts().map((Experiences) => (
              <SwiperSlide>
                <AccessoryCard
                   key={Experiences._id}
                   _id={Experiences._id}
                   image={Experiences.image}
                   name={Experiences.name}
                   price={Experiences.price}
                   points={Experiences.points}
                   description={Experiences.description}
                   originalprice={Experiences.originalprice}
                   quantity={Experiences.quantity}
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

export default AccessoryList;