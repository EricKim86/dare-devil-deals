import React from "react";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from "../images/logos/logo5.png"
import Surfing from "../images/logos/surfing.avif"
import Social from "../images/logos/social-media.avif"
import Save from "../images/logos/save.avif"
import Cart from "../images/logos/go-cart.avif"
import Concert from "../images/logos/concert.avif"
import Art from "../images/logos/art.avif"
import Raft from "../images/logos/raft.avif"

const styles = {
  container: {
    margin: '20px',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  width: {
    textAlign: 'center',
    width: '20rem'
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
  },
  image: {
    width: '400px',
    height: '250px',
  },
  largeImage: {
    width: '500px',
    height: '350px',
  }
}

export default function Home() {

  return (
    <div style={styles.container}>
      <img className="img-fluid" src={Logo} alt='logo' />
      <br />
      <br />
      <h1>Enjoy unique experiences</h1>
      <p>We take all the guess work out and provide a streamlined easy experience for you.</p>
      <br />

      <Container>
        <Row>
          <Col><img style={styles.image} className="img-fluid" src={Save} alt='logo' />
            <h2>DEALS</h2>
            <p style={styles.width}></p>
            We partnered with numerous vendors and locations to provide the best deals imaginable.
          </Col>
          <Col><img style={styles.image} className="img-fluid" src={Surfing} alt='logo' />
            <h2>EXPERIENCE</h2>
            <p style={styles.width}></p>
            Enjoy a selection of wonderful experiences catered by our team of professionals
          </Col>
          <Col><img style={styles.image} className="img-fluid" src={Social} alt='logo' />
            <h2>SHARE</h2>
            <p style={styles.width}></p>
            Share your experiences with others with our integrated social media platform
          </Col>
        </Row>
      </Container>

      <br />
      <br />

      <Container>
        <Row>
          <Col><img style={styles.image} className="img-fluid" src={Raft} alt='logo' /></Col>
          <Col><img style={styles.image} className="img-fluid" src={Cart} alt='logo' /></Col>
        </Row>
      </Container>
      <br />

      <h2>Diversity in Experiences</h2>
      <p>We offer a diverse range of experiences perfect for all individuals.</p>
      <br />

      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <h2>Family Friendly</h2>
            <p> In addition to thrilling new experiences, we offer numerous family friendly experiences fun for the entire family.</p>
          </Col>
          <Col><img style={styles.image} className="img-fluid" src={Art} alt='logo' /></Col>
        </Row>
      </Container>
<br />

      <Container>
        <Row>
        <Col><img style={styles.image} className="img-fluid" src={Concert} alt='logo' /></Col>
          <Col>
            <br />
            <br />
            <h2>Join Today</h2>
            <p>Join today to start enjoying our amazing new experiences and start earning points!  One of the many benefits of becoming a member.</p>
          </Col>
        </Row>
      </Container>

      <div style={styles.icon}>
        <h2>Follow Us</h2>
        <a href='https://www.google.com' target="blank"><i style={styles.space} className='fa-brands fa-facebook'></i></a>
        <a href='https://www.google.com' target='blank'><i style={styles.space} className='fa-brands fa-instagram'></i></a>
        <a href='https://www.google.com' target='blank'><i style={styles.space} className='fa-brands fa-twitter'></i></a>
      </div>
      <br />
    </div>
  );
}