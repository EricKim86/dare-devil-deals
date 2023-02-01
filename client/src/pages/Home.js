import React from "react";
import Card from 'react-bootstrap/Card';

const styles = {
  container: {
    margin: '20px',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center'
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  width: {
    width: '24rem'
  },
  buffer: {
    margin: '30px 50px 50px 10px',
    border: 'none',
  },
  icon: {
    padding: '40px 30px 0px 30px',
    fontSize: '50px'
  },
  space: {
    margin: '0 10px 40px 10px'
  }
}

export default function StudentList() {

  return (
    <div style={styles.container}>
      <img class="img-fluid" src="https://picsum.photos/id/30/600/400" alt='logo' />
      <br />
      <br />
      <h1>Enjoy unique experiences</h1>
      <p>We take all the guess work out and provide a streamlined easy experience for you.</p>
      <div style={styles.center} className="d-flex row mb-3">
        <Card style={styles.buffer} >
          <Card.Img variant="top" src="https://picsum.photos/id/20/400/300" alt='logo' />
          <Card.Body>
            <Card.Title>DEALS</Card.Title>
            <Card.Text style={styles.width}>
              We partnered with numerous vendors and locations to provide the best deals imaginable.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={styles.buffer}>
          <Card.Img variant="top" src="https://picsum.photos/id/36/400/300" alt='logo' />
          <Card.Body>
            <Card.Title>EXPERIENCE</Card.Title>
            <Card.Text style={styles.width}>
              Enjoy a selection of wonderful experiences catered by our team of professionals
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={styles.buffer}>
          <Card.Img variant="top" src="https://picsum.photos/id/52/400/300" alt='logo' />
          <Card.Body>
            <Card.Title>SHARE</Card.Title>
            <Card.Text style={styles.width}>
              Share your experiences with others with our integrated social media platform
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div style={styles.center} className="d-flex row mb-3">
        <Card.Img variant="top" src="https://picsum.photos/id/65/600/300" alt='logo' />
        <Card style={styles.buffer}>
          <Card.Body>
            <Card.Title><h2>Join Today</h2></Card.Title>
            <Card.Text style={styles.width}>
              Join today to start enjoying our amazing new experiences
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div style={styles.icon}>
        <h2>Follow Us</h2>
        <a href='https://www.google.com' target="blank"><i style={styles.space} class='fa-brands fa-facebook'></i></a>
        <a href='https://www.google.com' target='blank'><i style={styles.space} class='fa-brands fa-instagram'></i></a>
        <a href='https://www.google.com' target='blank'><i style={styles.space} class='fa-brands fa-twitter'></i></a>
      </div>

    </div>
  );
}