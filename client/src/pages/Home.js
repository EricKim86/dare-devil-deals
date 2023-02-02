import React from "react";
import Card from 'react-bootstrap/Card';
import Logo from "../images/logos/logo2.png"
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
      <div style={styles.center} className="d-flex row mb-3">
        <Card style={styles.buffer} >
          <Card.Img style={styles.image} variant="top" src={Save} alt='logo' />
          <Card.Body>
            <Card.Title><h2>DEALS</h2></Card.Title>
            <Card.Text style={styles.width}>
              We partnered with numerous vendors and locations to provide the best deals imaginable.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={styles.buffer}>
          <Card.Img style={styles.image} variant="top" src={Surfing} alt='logo' />
          <Card.Body>
            <Card.Title><h2>EXPERIENCE</h2></Card.Title>
            <Card.Text style={styles.width}>
              Enjoy a selection of wonderful experiences catered by our team of professionals
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={styles.buffer}>
          <Card.Img style={styles.image} variant="top" src={Social} alt='logo' />
          <Card.Body>
            <Card.Title><h2>SHARE</h2></Card.Title>
            <Card.Text style={styles.width}>
              Share your experiences with others with our integrated social media platform
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div style={styles.center} className='row'>
        <Card>
          <Card.Img style={styles.largeImage} variant="top" src={Raft} alt='logo' />
          <Card.Img style={styles.largeImage} variant="top" src={Cart} alt='logo' />
        </Card>
      </div>

      <div style={styles.center} className="d-flex row mb-3">
        <Card>
          <Card.Body>
            <Card.Title><h2>Diversity in Experiences</h2></Card.Title>
            <Card.Text style={styles.width}>
              We offer a diverse range of experiences perfect for all individuals.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div style={styles.center} className="d-flex row mb-3">
        <Card style={styles.buffer}>
          <Card.Body>
            <Card.Title><h2>Family Friendly</h2></Card.Title>
            <Card.Text style={styles.width}>
              In addition to thrilling new experiences, we offer numerous family friendly experiences fun for the entire family.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card.Img style={styles.image} variant="left" src={Art} alt='logo' />
      </div>

      <div style={styles.center} className="d-flex row mb-3">
        <Card.Img style={styles.image} variant="left" src={Concert} alt='logo' />
        <Card style={styles.buffer}>
          <Card.Body>
            <Card.Title><h2>Join Today</h2></Card.Title>
            <Card.Text style={styles.width}>
              Join today to start enjoying our amazing new experiences and start earning points!  One of the many benefits of becoming a member.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br/>

      <div style={styles.icon}>
        <h2>Follow Us</h2>
        <a href='https://www.google.com' target="blank"><i style={styles.space} class='fa-brands fa-facebook'></i></a>
        <a href='https://www.google.com' target='blank'><i style={styles.space} class='fa-brands fa-instagram'></i></a>
        <a href='https://www.google.com' target='blank'><i style={styles.space} class='fa-brands fa-twitter'></i></a>
      </div>

    </div>
  );
}