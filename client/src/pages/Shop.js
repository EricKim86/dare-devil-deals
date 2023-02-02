import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExperienceCard from '../components/ExperienceCard/';

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
}

function Shop() {
  return (
    <div style={styles.container}>
      <h3>EXPERIENCE <span style={styles.gray}>what you want to experience</span></h3>
      {/* <h3>SHOP the way you want to shop</h3> */}
      <Button style={styles.space} variant="primary"><i class="fas fa-hiking"></i> Activity 1</Button>
      <Button style={styles.space} variant="primary"><i class="fas fa-hiking"></i> Activity 2</Button>
      <Button style={styles.space} variant="primary"><i class="fas fa-hiking"></i> Activity 3</Button>
      <Button style={styles.space} variant="primary"><i class="fas fa-hamburger"></i> Food</Button>
      <Button style={styles.space} variant="primary"><i class="fa fa-shopping-bag" aria-hidden="true"></i> Accessories</Button>
      <Container>
        <Row>
          <Col><ExperienceCard /></Col>
          <Col><ExperienceCard /></Col>
          <Col><ExperienceCard /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shop;