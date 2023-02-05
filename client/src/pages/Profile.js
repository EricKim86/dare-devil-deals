import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import Profile1 from '../images/logos/profile1.avif'
import Profile2 from '../images/logos/profile2.avif'
import Profile3 from '../images/logos/profile3.avif'
import Profile4 from '../images/logos/profile4.avif'
import Profile5 from '../images/logos/profile5.avif'
import Experience1 from '../images/logos/lasertag.avif'
import Experience2 from '../images/logos/kayak.avif'
import Experience3 from '../images/logos/arcade.avif'
import Experience4 from '../images/logos/museum.avif'
import Experience5 from '../images/logos/themepark.avif'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'

const styles = {
  height: {
    minHeight: '100vh'
  },
  image: {
    margin: '10px 20px 20px 30px',
    width: '70%',
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    border: 'solid gray'
  },
  experienceImg: {
    objectFit: 'cover',
    maxHeight: '25rem',
    borderRadius: '10px',
  },
  body: {
    color: '#204c39',
    backgroundColor: 'white',
    width: '25rem',
    borderRadius: '10px'
  },
  space: {
    margin: '5px 10px 5px 10px'
  },
  contact: {
    color: 'white',
    backgroundColor: '#204c39',
    textAlign: 'center',
    borderRadius: '10px',
    padding: '5px 0 5px 0'
  },
  experienceTitle: {
    color: 'white',
    backgroundColor: '#204c39',
    textAlign: 'center',
  },
  topCard: {
    backgroundColor: '#204c39',
    textAlign: 'center',
    borderRadius: '10px 10px 0 0'
  },
  expCard: {
    backgroundColor: '#204c39',
    color: 'white',
    borderRadius: '10px',
    padding: '5px'
  },
  font: {
    fontSize: '24px',
    margin: '5px 15px 5px 15px',
  },
  white: {
    color: 'white',
    padding: '5px',
    margin: '2px 0 2px 0',
    textAlign: 'center',
  },
  containerTwo: {
    width: '25rem'
  }
}
export default function Profile() {

  const { id } = useParams();

  const { data } = useQuery(QUERY_USER, {
    variables: { _id: id }
  });

  const user = data?.user || {};

console.log(user);

  return (
    <div style={styles.height} className="y-1 ">
      <Container>
        <Link to="/Feed">← Back to Feed</Link>
        <br />
        <br />

        <Row>
          <Col>
            <div className="container"></div>

            <Card style={styles.body} className='border border-tertiary'>
              <div style={styles.topCard}>
                <Card.Img style={styles.image} variant="top" src='https://picsum.photos/id/56/200/200' />
              </div>
              <Card.Body style={styles.space}>
                <Card.Title>{user.userName}</Card.Title>
                <Card.Subtitle className="mb-2">{user.firstName} {user.lastName}</Card.Subtitle>
                <Card.Subtitle className="mb-2">{user.location}</Card.Subtitle>
                <Card.Text>
                  {user.bio}
                </Card.Text>
                <div style={styles.contact}>
                  <i style={styles.font} className="fa-solid fa-envelope"></i>
                  <i style={styles.font} className="fa-brands fa-facebook-f"></i>
                  <i style={styles.font} className="fa-brands fa-instagram"></i>
                  <i style={styles.font} className="fa-brands fa-twitter"></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col style={styles.containerTwo}>
            <h3 style={styles.contact} className='border border-tertiary'>Friends List</h3>
            <h6 style={styles.white}><i className="fa-solid fas fa-hard-hat"></i> Coming Soon <i className="fa-solid fas fa-hard-hat"></i></h6>
            <Swiper
              style={styles.white}
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode]}
              className='mySwiper'
              scrollbar={true}
              slidesPerView={3}
              spaceBetween={10}
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
                  slidesPerView: 3,
                  spaceBetween: 10,
                }
              }}
            >

              <Row>
                <SwiperSlide><img style={styles.experienceImg} className="img-fluid" src={Profile1} alt='Profile' />Ashley Bennett</SwiperSlide>
                <SwiperSlide><img style={styles.experienceImg} className="img-fluid" src={Profile2} alt='Profile' />Sam Henderson</SwiperSlide>
                <SwiperSlide><img style={styles.experienceImg} className="img-fluid" src={Profile3} alt='Profile' />Jason DeWitt</SwiperSlide>
                <SwiperSlide><img style={styles.experienceImg} className="img-fluid" src={Profile4} alt='Profile' />Mr. Bubbles</SwiperSlide>
                <SwiperSlide><img style={styles.experienceImg} className="img-fluid" src={Profile5} alt='Profile' />Henry Jordan</SwiperSlide>
              </Row>
              <br />
              <h3 style={styles.contact} className='border border-tertiary'>Member Status</h3>
              <h6 style={styles.white}><i className="fa-solid fas fa-hard-hat"></i> Coming Soon <i className="fa-solid fas fa-hard-hat"></i></h6>
            </Swiper>
          </Col>

          <div className="container">
            <h3 style={styles.contact} className='border border-tertiary'>My Experiences</h3>
          </div>
        </Row>
      </Container >
    </div >
  );
}


