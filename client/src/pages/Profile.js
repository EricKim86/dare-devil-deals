import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

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
    maxHeight: '25rem'
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
    borderRadius: '10px'
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
  }
}

export default function Profile() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div style={styles.height} className="y-1">
        <br />
        <br />
        {user ? (
          <>
            <Container>
              <Row>
                <Col>
                  <Card style={styles.body} className='border border-tertiary'>
                    <div style={styles.topCard}>
                      <Card.Img style={styles.image} variant="top" src='https://picsum.photos/id/18/200/200' />
                    </div>
                    <Card.Body style={styles.space}>
                      <Card.Title>{user.userName}</Card.Title>
                      <Card.Subtitle className="mb-2">{user.firstName} {user.lastName}</Card.Subtitle>
                      <Card.Subtitle className="mb-2">{user.location}</Card.Subtitle>
                      <Card.Text>
                        {user.bio}
                      </Card.Text>
                      <div style={styles.contact}>
                        <i style={styles.font} class="fa-solid fa-envelope"></i>
                        <i style={styles.font} class="fa-brands fa-facebook-f"></i>
                        <i style={styles.font} class="fa-brands fa-instagram"></i>
                        <i style={styles.font} class="fa-brands fa-twitter"></i>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <h3 style={styles.contact}>My Experiences</h3>
                  <Card style={{ width: '40rem' }}>
                    <Row>
                      <Col>
                        <Card.Img style={styles.experienceImg} className="img-fluid" variant="top" src='https://picsum.photos/id/37/200/200' />
                      </Col>
                      <Col>
                        <Card.Body>
                          <div style={styles.expCard}>
                          <Card.Title>CorgiFan21</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Hiking in the Mountains</Card.Subtitle>
                          </div>
                          <Card.Text>
                            This was such a fun experience!  My entire family enjoyed the lovely hike across the beautiful mountains.
                          </Card.Text>
                          <Button variant="primary">See All User Reviews</Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container >
          </>
        ) : null}
      </div>
    </>
  );
}