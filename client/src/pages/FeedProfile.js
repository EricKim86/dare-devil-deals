import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_FEED_USERS } from '../utils/queries';

const styles = {
  image: {
    margin: '10px 0 20px 40px',
    width: '70%',
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  experienceImg: {
    objectFit: 'cover',
    maxHeight: '25rem'
  }
}

export default function Profile() {
  const { data } = useQuery(QUERY_FEED_USERS);
  let user;

  if (data) {
    user = data.userFeed;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/Feed">← Back to Feed</Link>
        <br />
        <br />
        {user ? (
          <>
            <Container>
              <Row>
                <Col>
                  <Card style={{ width: '25rem' }}>
                    <Card.Img style={styles.image} variant="top" src='https://picsum.photos/id/65/200/200' />
                    <Card.Body>
                      <Card.Title>{user.userName}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{user.firstName} {user.lastName}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">{user.location}</Card.Subtitle>
                      <Card.Text>
                        {user.bio}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: '40rem' }}>
                    <Row>
                      {/* <Col>
                  <Card.Img style={styles.experienceImg} className="img-fluid" variant="top" src='https://picsum.photos/id/37/200/200' />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>CorgiFan21</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Hiking in the Mountains</Card.Subtitle>
                    <Card.Text>
                    This was such a fun experience!  My entire family enjoyed the lovely hike across the beautiful mountains.
                    </Card.Text>
                    <Button variant="primary">See All User Reviews</Button>
                    </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card style={{ width: '40rem' }}>
              <Row>
                <Col>
                  <Card.Img style={styles.experienceImg} className="img-fluid" variant="top" src='https://picsum.photos/id/37/200/200' />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>CorgiFan21</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Hiking in the Mountains</Card.Subtitle>
                    <Card.Text>
                    This was such a fun experience!  My entire family enjoyed the lovely hike across the beautiful mountains.
                    </Card.Text>
                    <Button variant="primary">See All User Reviews</Button>
                    </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card style={{ width: '40rem' }}>
              <Row>
                <Col>
                  <Card.Img style={styles.experienceImg} className="img-fluid" variant="top" src='https://picsum.photos/id/37/200/200' />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>CorgiFan21</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Hiking in the Mountains</Card.Subtitle>
                    <Card.Text>
                    This was such a fun experience!  My entire family enjoyed the lovely hike across the beautiful mountains.
                    </Card.Text>
                    <Button variant="primary">See All User Reviews</Button>
                    </Card.Body>
                </Col> */}
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