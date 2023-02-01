import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const styles = {
  product: {
    width: '25rem',
    backgroundColor: 'white',
    margin: '10px 10px 10px 10px',
    borderRadius: '3%',
  },
  image: {
    borderRadius: '3% 3% 0 0',
  },
  indent: {
    margin: '0px 0px 10px 0px'
  },
  center: {
    justifyContent: 'center',
  },
  space: {
    margin: '0px 0px 0px 12px',
  },
}

export default function StudentList() {

  return (
    <div style={styles.center} className='container row text-primary'>

      <Card style={styles.product}>
        <Card.Img style={styles.image} variant="top" src="https://picsum.photos/id/5/400/300" alt='logo' />
        <Card.Body>
          <div className='d-flex flex-row mb-3 row' style={styles.indent} >
            <i style={styles.space} class="fa-solid fa-thumbs-up"></i><h6 style={styles.space}>8</h6>
            <i style={styles.space} class="fas fa-thumbs-down"></i><h6 style={styles.space}>1</h6>
          </div>
          <Card.Title><h3>Programing with Leif</h3></Card.Title>
          <Card.Text>
            A fun filled afternoon programing javascript with Leif.  Added benefit of having no Ben.
          </Card.Text>
          <Card.Text>
          <del>$20.99</del><p>$13.99</p>
          </Card.Text>
          <Button variant="primary"><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Add to Cart</Button> <Button variant="primary"><i class="fas fa-comments"></i> Read Reviews</Button>
        </Card.Body >
      </Card >

    </div >
  );
}