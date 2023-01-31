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
  experienceCard: {
    margin: '30px 0 30px 0'
  }
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
            <p>Diamond</p>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </Card>

      <div style={styles.experience} className='d-flex justify-content-center col mb-8'>
        <h4>Experiences</h4>
        <Card style={styles.experienceCard}>
          <img src="https://picsum.photos/id/28/600/400" alt="profile" />
          <h4>Hiking</h4>
        </Card>

        <Card style={styles.experienceCard}>
          <img src="https://picsum.photos/id/37/600/400" alt="profile" />
          <h4>Camping</h4>
        </Card>

        <Card style={styles.experienceCard}>
          <img src="https://picsum.photos/id/75/600/400" alt="profile" />
          <h4>Vinyard Tour</h4>
        </Card>

      </div>
    </div>
  );
}