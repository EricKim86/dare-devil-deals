import React from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ExperienceCard from '../components/ExperienceCard/';
import MealCard from '../components/MealCard/';
import AccessoryCard from '../components/AccessoryCard/';

import Delivery from "../images/logos/delivery.avif"
import Fun from "../images/logos/fun.avif"
import Payment from "../images/logos/payment.avif"
import Supplies from "../images/logos/supplies.avif"
import Camping from "../images/logos/camping.avif"
import Smores from "../images/logos/smores.avif"

const styles = {
  container: {
    margin: '20px',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  space: {
    margin: '10px',
  },
  gray: {
    color: 'gray',
  },
  buffer: {
    margin: '40px 10px 20px 10px',
    border: 'none',
  },
  image: {
    width: '350px',
    height: '200px',
  },
  width: {
    width: '20rem'
  },
}

function Shop() {
  return (
    <div style={styles.container}>
      <h3>EXPERIENCE <span style={styles.gray}>what you want to experience</span></h3>
      <h3><span style={styles.gray}>When you are a member of</span> DARE DEVIL DEALS</h3>
      <br />

      <Container>
        <Row>
          <Col><img style={styles.image} className="img-fluid" src={Camping} alt='logo' />
            <h2>STEP 1</h2>
            <p style={styles.width}></p>
            Choose your next experience based on intensity level.
          </Col>
          <Col><img style={styles.image} className="img-fluid" src={Smores} alt='logo' />
            <h2>STEP 2</h2>
            <p style={styles.width}></p>
            Get a discount on a variety of different meals near your experience.
          </Col>
          <Col><img style={styles.image} className="img-fluid" src={Supplies} alt='logo' />
            <h2>STEP 3</h2>
            <p style={styles.width}></p>
            Pick up any necessary accessories at a discounted rate.
          </Col>
        </Row>
      </Container>
      <br />


      <h3>STEP 1 <span style={styles.gray}>Select your level of intensity</span></h3>
      <Button style={styles.space} variant="primary"><i class="fas fa-hiking"></i> Activity 1</Button>
      <Button style={styles.space} variant="primary"><i class="fas fa-hiking"></i> Activity 2</Button>
      <Button style={styles.space} variant="primary"><i class="fas fa-hiking"></i> Activity 3</Button>

      <div className='d-flex justify-content-center'>
        {/* <Carousel> */}
          <ExperienceCard />
        {/* </Carousel> */}
      </div>

      <br />
      <Container>
        <h3>STEP 2 <span style={styles.gray}>Select your desired meal</span></h3>
        <Button style={styles.space} variant="primary"><i class="fas fa-hamburger"></i> American</Button>
        <Button style={styles.space} variant="primary"><i class="fas fa-pepper-hot"></i> Mexican</Button>
        <Button style={styles.space} variant="primary"><i class="fas fa-pizza-slice"></i> Italian</Button>
        <Button style={styles.space} variant="primary"><i class="fas fa-seedling"></i> Chinese</Button>
        <Row>
          <Col></Col>
        </Row>
        <br />
        <h3>STEP 3 <span style={styles.gray}>Select your must have accessories</span></h3>
        <Button style={styles.space} variant="primary"><i class="fas fa-hamburger"></i>Clothing</Button>
        <Button style={styles.space} variant="primary"><i class="fas fa-pepper-hot"></i>Grocery</Button>
        <Button style={styles.space} variant="primary"><i class="fas fa-pizza-slice"></i>Misc</Button>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <br />
      <h3>SHOP <span style={styles.gray}>with 100% confidence with Dare Devil Deals</span></h3>
      <br />

      <Container>
        <Row>
          <Col><img style={styles.image} className="img-fluid" src={Fun} alt='logo' />
            <h2>CANCELATION</h2>
            <p style={styles.width}></p>
            Cancel your experience within 24 hours with no additional fees.
          </Col>
          <Col><img style={styles.image} className="img-fluid" src={Delivery} alt='logo' />
            <h2>FREE SHIPPING</h2>
            <p style={styles.width}></p>
            Free shipping on all your necessary accessories with purchase of any experience.
          </Col>
          <Col><img style={styles.image} className="img-fluid" src={Payment} alt='logo' />
            <h2>SECURE</h2>
            <p style={styles.width}></p>
            Take comfort in knowing your transactions and information are 100% secure.
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default Shop;

