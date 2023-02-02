import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Italian from "../../images/logos/italian.avif"

const styles = {
  product: {
    width: '25rem',
    backgroundColor: 'white',
    margin: '10px 20px 10px 20px',
    borderRadius: '3%',
    textAlign: 'center',
  },
  image: {
    borderRadius: '3% 3% 0 0',
    width: '400px',
    height: '250px',
  },
  indent: {
    margin: '0px 0px 10px 0px',
    padding: '5px',
  },
  space: {
    margin: '0px 0px 0px 12px',
  },
  
}

export default function ExperienceCard() {

  return (
    <div className='container row text-primary'>
      <Card style={styles.product}>
        <Card.Img style={styles.image} variant="top" src='' alt='logo' />
        <Card.Body>
          <Card.Title><h3>Italian Restaurant</h3></Card.Title>
          <Card.Text>
            Authentic Italian dining.
          </Card.Text>
          <Card.Text>
          <p>$9.99 for 10% off Entire Meal</p>
          </Card.Text>
          <Button variant="primary"><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Add to Cart</Button>
        </Card.Body >
      </Card >
    </div >
  );
}