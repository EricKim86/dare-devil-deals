import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_EXPERIENCES } from '../../utils/queries';
import Carousel from 'react-bootstrap/Carousel';

const styles = {
  product: {
    width: '25rem',
    height: '100%',
    backgroundColor: 'white',
    margin: '10px 20px 10px 20px',
    borderRadius: '3%',
  },
  indent: {
    margin: '0px 0px 10px 0px',
    padding: '5px',
  },
  left: {
    justifyContent: 'center',
  },
  image: {
    objectFit: 'cover',
    maxHeight: '15rem'
  }
}

export default function ExperienceCard() {
  const { data } = useQuery(QUERY_ALL_EXPERIENCES);
  let experiences;

  if (data) {
    experiences = data.experiences;
  }

  return (
    <div className='container row text-primary'>
      {experiences ? (
        <div>
          {experiences.map(({ name, description, price, image }, index) => (
            <div key={index}>
              {/* <Carousel.Item> */}
              <Card style={styles.product}>
                <Card.Img style={styles.image} className='img-fluid' variant="top" src={`/images/experiences/${image}`} alt='experience' />
                <Card.Body>
                  <Container>
                    <Col><h3>{name}</h3></Col>
                    <Row style={styles.center}>
                      <Col><i class="fa-solid fa-thumbs-up"></i><h6>8</h6></Col>
                      <Col><i class="fas fa-thumbs-down"></i><h6>1</h6></Col>
                    </Row>
                  </Container>
                  <Card.Text>
                    {description}
                  </Card.Text>
                  <Card.Text>
                    <del>$20.99</del><p>${price}</p>
                  </Card.Text>
                  <Button variant="primary"><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Add to Cart</Button> <Button variant="primary"><i class="fas fa-comments"></i> Read Reviews</Button>
                </Card.Body >
              </Card>
              {/* </Carousel.Item> */}
            </div>
          ))}
        </div>
      ) : null}
    </div >
  );
}