import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '25rem' }}>
              <Card.Img style={styles.image} variant="top" src='https://picsum.photos/id/65/200/200' />
              <Card.Body>
                <Card.Title>CorgiFan21</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ashley Johnson</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Dallas, TX</Card.Subtitle>
                <Card.Text>
                  My name is Ashley and I love Corgis. They are the best dogs in the world because they are so cute.  They have small legs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
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
          </Col>
        </Row>
      </Container >
    </div >
  );
}