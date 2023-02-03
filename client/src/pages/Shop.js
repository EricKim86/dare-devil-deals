import React from "react";
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ExperienceCard from '../components/ExperienceCard/';
import MealCard from '../components/MealCard/';
import AccessoryCard from '../components/AccessoryCard/';
import ActivityLevelMenu from "../components/AcitivityLevelMenu";
import ExperienceList from "../components/ExperiencesList";

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
  darkGreen: {
    color: '#9ec378',
  },
  buffer: {
    margin: '40px 10px 20px 10px',
  },
  image: {
    width: '350px',
    height: '200px',
  },
  width: {
    width: '20rem'
  },
  fontStyle: {
    fontFamily: `rock salt`,
    fontSize: '26px',
  }
}

function Shop() {
  return (
    <div style={styles.container}>

      <h3>EXPERIENCE <span style={styles.gray}>what you want to experience</span></h3>
      <h3><span style={styles.gray}>When you are a member of</span><span style={styles.darkGreen}><span style={styles.fontStyle}> Dare Devil</span> DEALS</span></h3>
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
      <Button style={styles.space} variant="primary"><i className="fas fa-hiking"></i> Activity 1</Button>
      <Button style={styles.space} variant="primary"><i className="fas fa-hiking"></i> Activity 2</Button>
      <Button style={styles.space} variant="primary"><i className="fas fa-hiking"></i> Activity 3</Button>

      {/* <ActivityLevelMenu /> */}
      <ExperienceList />

      {/* <div style={styles.container} className='d-flex justify-content-center'>
        <ExperienceCard />
      </div>
      <br /> */}

      <h3>STEP 2 <span style={styles.gray}>Select your desired meal</span></h3>
      <Button style={styles.space} variant="primary"><i className="fas fa-hamburger"></i> American</Button>
      <Button style={styles.space} variant="primary"><i className="fas fa-pepper-hot"></i> Mexican</Button>
      <Button style={styles.space} variant="primary"><i className="fas fa-pizza-slice"></i> Italian</Button>
      <Button style={styles.space} variant="primary"><i className="fas fa-seedling"></i> Chinese</Button>
      <Button style={styles.space} variant="primary"><i className="fa-solid fa-cheese"></i> French</Button>

      {/* <div style={styles.container} className='d-flex justify-content-center'>
        <MealCard />
      </div>
      <br /> */}

      <h3>STEP 3 <span style={styles.gray}>Select your must have accessories</span></h3>
      <Button style={styles.space} variant="primary"><i className="fas fa-shopping-bag"></i> Food and Grocery</Button>
      <Button style={styles.space} variant="primary"><i className="fa-solid fa-shirt"></i> Clothing</Button>
      <Button style={styles.space} variant="primary"><i className="fa-solid fa-basketball"></i> Sports and Outdoors</Button>
      <Button style={styles.space} variant="primary"><i className="fa fa-question-circle"></i> Misc</Button>

      {/* <div style={styles.container} className='d-flex justify-content-center'>
        <AccessoryCard />
      </div>
      <br /> */}

      <br />
      <h3 style={styles.darkGreen}>SHOP <span style={styles.gray}>with 100% confidence with Dare Devil Deals</span></h3>
      <br />

      <Container>
        <Row>
          <Col><img style={styles.image} className="img-fluid" src={Fun} alt='logo' />
            <h2 style={styles.darkGreen}>CANCELATION</h2>
            <p style={styles.width}></p>
            Cancel your experience within 24 hours with no additional fees.
          </Col>
          <Col><img style={styles.image} className="img-fluid" src={Delivery} alt='logo' />
            <h2 style={styles.darkGreen}>FREE SHIPPING</h2>
            <p style={styles.width}></p>
            Free shipping on all your necessary accessories with purchase of any experience.
          </Col>
          <Col><img style={styles.image} className="img-fluid" src={Payment} alt='logo' />
            <h2 style={styles.darkGreen}>SECURE</h2>
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

