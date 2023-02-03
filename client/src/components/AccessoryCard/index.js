import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'

import { useQuery } from '@apollo/client';
import { QUERY_ALL_EXPERIENCES } from '../../utils/queries';

const styles = {
  center: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  product: {
    width: '20rem',
    height: '100%',
    backgroundColor: 'white',
    margin: '10px 20px 10px 20px',
    borderRadius: '3%',
  },
  indent: {
    margin: '0px 0px 10px 0px',
    padding: '5px',
  },
  image: {
    objectFit: 'cover',
    maxHeight: '10rem'
  },
  bottom: {
    alignItems: ''
  },
  green: {
    color: 'green',
  },
  white: {
    color: 'white',
  },
  topCard: {
    background: '#204c39',
    width: '100%',
    borderRadius: '10px'
  }
}

export default function ExperienceCard() {
  const { data } = useQuery(QUERY_ALL_EXPERIENCES);
  let experiences;

  if (data) {
    experiences = data.experiences;
  }
  return (
    <div style={styles.center} className='container row text-primary'>
      {experiences ? (
        <Swiper
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
          {experiences.map(({ name, description, originalprice, price, points, image }, index) => (
            <SwiperSlide key={index}>
              <Card style={styles.product}>
                <Card.Img style={styles.image} className='img-fluid' variant="top" src={`/images/products/${image}`} alt='experience' />
                <Card.Body>
                <Container style={styles.topCard}>
                    <Col><h3 style={styles.white}>{name}</h3></Col>
                      <Col><p style={styles.white}>Points: {points}</p></Col>
                  </Container>
                  <Container>
                    <Row>
                    <Col><del>${originalprice}</del><p style={styles.green}>${price}</p></Col>
                    </Row>
                    <Row>
                      <Col><Button variant="primary"><i className="fa fa-shopping-cart" aria-hidden="true"></i>  Add to Cart</Button></Col>
                    </Row>
                  </Container>
                  <br />
                  <Card.Text>
                    {description}
                  </Card.Text>      
                </Card.Body >
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div >
  );
}