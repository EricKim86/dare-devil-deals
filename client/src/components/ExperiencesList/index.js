import React, { useEffect, useState } from 'react';
import ExperienceCard from '../ExperienceCard';
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

function ExperienceList() {
  const [state, dispatch] = useStoreContext();

  const [currentActivityLevel, setCurrentActivityLevel] = useState(1);

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
    return state.experiences.filter(
      (experiences) => experiences.activityLevel === currentActivityLevel
    );
  }

  return (
    <div className="my-2">
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(1)}><i className="fas fa-hiking"></i> Activity 1</Button>
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(2)}><i className="fas fa-hiking"></i> Activity 2</Button>
      <Button style={styles.space} variant="primary" onClick={() => setCurrentActivityLevel(3)}><i className="fas fa-hiking"></i> Activity 3</Button>
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
                spaceBetween: 5,
              },
              1100: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 5,
              }
            }}
          >
            {filterProducts().map((Experiences) => (
              <SwiperSlide>
                <ExperienceCard
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

export default ExperienceList;