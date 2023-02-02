import React from "react";
import Auth from "../../utils/auth";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
  container: {
    color: 'white',
    fontSize: '28px'
  },
  width: {
    width: '70%',
    margin: '5px 0 0 0',
  },
  space: {
    margin: '0, 10px, 0 10px',
  }
}

function Navigation() {

  function showNavigation() {
    // if (Auth.loggedIn()) {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav style={styles.width} className="me-auto">
            <Row>
              <Col><Nav.Link href="/">Home </Nav.Link></Col>
              <Col><Nav.Link href="/Profile">Profile</Nav.Link></Col>
              <Col><Nav.Link href="/Feed">Feed</Nav.Link></Col>
              <Col><Nav.Link href="/Shop">Shop</Nav.Link></Col>
              <Col><Nav.Link href="/Experience">Experience</Nav.Link></Col>
            </Row>
          </Nav>

        </Container>
      </Navbar>
    );
    //   <Nav className="mx-1">
    //   {/* this is not using the Link component to logout or user and then refresh the application to the start */}
    //   <a href="/" onClick={() => Auth.logout()}>
    //     Logout
    //   </a>
    // </Nav>
    //   } else {
    //     return (
    //       <ul className="flex-row">
    //         <li className="mx-1">
    //           <Link to="/signup">
    //             Signup
    //           </Link>
    //         </li>
    //         <li className="mx-1">
    //           <Link to="/login">
    //             Login
    //           </Link>
    //         </li>
    //       </ul>
    //     );
    // }
  }

  return (
    <header style={styles.container} className="flex-row px-1">
      <h1>Dare Devil Deals</h1>
      <nav style={styles.width}>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Navigation;
