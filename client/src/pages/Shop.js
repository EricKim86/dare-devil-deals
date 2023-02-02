import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
      <Container>
      <h3>EXPERIENCE <span style={styles.gray}>what you want to experience</span></h3>
      <h3><span style={styles.gray}>When you are a member of</span> DARE DEVIL DEALS</h3>
        <Row>
          <Col>
            <div style={styles.container}>
              <Card style={styles.buffer}>
                <Card.Img style={styles.image} variant="top" src={Camping} alt='logo' />
                <Card.Body>
                  <Card.Title><h2>STEP 1</h2></Card.Title>
                  <Card.Text style={styles.width}>
                    Choose your next experience based on intensity level.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div style={styles.container}>
              <Card style={styles.buffer}>
                <Card.Img style={styles.image} variant="top" src={Smores} alt='logo' />
                <Card.Body>
                  <Card.Title><h2>STEP 2</h2></Card.Title>
                  <Card.Text style={styles.width}>
                    Get a discount on a variety of different meals near your experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div style={styles.container}>
              <Card style={styles.buffer}>
                <Card.Img style={styles.image} variant="top" src={Supplies} alt='logo' />
                <Card.Body>
                  <Card.Title><h2>STEP 3</h2></Card.Title>
                  <Card.Text style={styles.width}>
                    Pick up any necessary accessories at a discounted rate.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>


      <h3>SELECT <span style={styles.gray}>your level of intensity</span></h3>
      <Button style={styles.space} variant="primary"><i class="fas fa-hiking"></i> Activity 1</Button>
      <Button style={styles.space} variant="primary"><i class="fas fa-hiking"></i> Activity 2</Button>
      <Button style={styles.space} variant="primary"><i class="fas fa-hiking"></i> Activity 3</Button>
      <Container>
        <Row>
          <Col><ExperienceCard /></Col>
          <Col><ExperienceCard /></Col>
          <Col><ExperienceCard /></Col>
        </Row>
        <br />
        <h3>SELECT <span style={styles.gray}>your desired meal</span></h3>
        <Button style={styles.space} variant="primary"><i class="fas fa-hamburger"></i> American</Button>
        <Button style={styles.space} variant="primary"><i class="fas fa-pepper-hot"></i> Mexican</Button>
        <Button style={styles.space} variant="primary"><i class="fas fa-pizza-slice"></i> Italian</Button>
        <Button style={styles.space} variant="primary"><i class="fas fa-seedling"></i> Chinese</Button>
        <Row>
          <Col><MealCard /></Col>
          <Col><MealCard /></Col>
          <Col><MealCard /></Col>
        </Row>
        <br />
        <h3>SELECT <span style={styles.gray}>your must have accessories</span></h3>
        <Row>
          <Col><AccessoryCard /></Col>
          <Col><AccessoryCard /></Col>
          <Col><AccessoryCard /></Col>
        </Row>
      </Container>
      <br />
      <h3>SHOP <span style={styles.gray}>with 100% confidence with Dare Devil Deals</span></h3>
      <Container>
        <Row>
          <Col>
            <div style={styles.container}>
              <Card style={styles.buffer}>
                <Card.Img style={styles.image} variant="top" src={Fun} alt='logo' />
                <Card.Body>
                  <Card.Title><h2>CANCELATION</h2></Card.Title>
                  <Card.Text style={styles.width}>
                    Cancel your experience within 24 hours with no additional fees.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div style={styles.container}>
              <Card style={styles.buffer}>
                <Card.Img style={styles.image} variant="top" src={Delivery} alt='logo' />
                <Card.Body>
                  <Card.Title><h2>FREE SHIPPING</h2></Card.Title>
                  <Card.Text style={styles.width}>
                    Free shipping on all your necessary accessories with purchase of any experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div style={styles.container}>
              <Card style={styles.buffer}>
                <Card.Img style={styles.image} variant="top" src={Payment} alt='logo' />
                <Card.Body>
                  <Card.Title><h2>SECURE</h2></Card.Title>
                  <Card.Text style={styles.width}>
                    Take comfort in knowing your transactions and information are 100% secure.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shop;