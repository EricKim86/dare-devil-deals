import React from "react";
import Card from 'react-bootstrap/Card';

const styles = {
  profile: {
    width: '30%',
  },
  container: {
    color: 'white',
    padding: '20px',
    margin: '0 50px 0 50px',
  },
  experience: {
    width: '60%',
  },
  space: {
    margin: '0 25px 0 25px'
  },
  left: {
    alignItems: 'start',
  },
  profileImage: {
    margin: '10px 0 20px 0px',
    width: '50%',
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  experienceImage: {
    borderRadius: '5px 0 0 5px'
  },
  experienceCard: {
    margin: '30px 10px 30px 40px',
    border: '1px solid white',
    borderRadius: '5px',
  },
  icon: {
    margin: '5px'
  },
  width: {
    width: '24rem'
  },
}

export default function StudentList() {
  return (
    <div style={styles.container} className='d-flex flex-row mb-12'>

      <Card style={styles.profile} className='col mb-4'>
        <div style={styles.left} className='d-flex flex-column'>
          <img style={styles.profileImage} src='https://picsum.photos/id/65/200/200' alt='profile' />
          <h4>CorgiFan123</h4>
          <p>Ashley Palmer</p>
          <p>Dallas, TX</p>
          <p>Email@email.com</p>
          <div className='d-flex flex-row'>
            <p>Rank: </p>
            <div style={styles.icon}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </Card>

      <div style={styles.experience} className='d-flex justify-content-center col mb-8'>


        <Card style={styles.experienceCard} className='d-flex row mb-12'>
          <img style={styles.experienceImage} src="https://picsum.photos/id/52/300/200" alt="experience" />
          <Card.Body>
            <Card.Title><h2>Fishing</h2></Card.Title>
            <Card.Text style={styles.width}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={styles.experienceCard} className='d-flex row mb-12'>
          <img style={styles.experienceImage} src="https://picsum.photos/id/24/300/200" alt="experience" />
          <Card.Body>
            <Card.Title><h2>Reading</h2></Card.Title>
            <Card.Text style={styles.width}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={styles.experienceCard} className='d-flex row mb-12'>
          <img style={styles.experienceImage} src="https://picsum.photos/id/39/300/200" alt="experience" />
          <Card.Body>
            <Card.Title><h2>Music</h2></Card.Title>
            <Card.Text style={styles.width}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
}