import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
  container: {
    color: 'white',
    fontSize: '28px',
  },
}

function Navigation() {

  function showNavigation() {
    // if (Auth.loggedIn()) {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Row>
              <Col><Nav.Link href="/">Home </Nav.Link></Col>
              <Col><Nav.Link href="/Profile">Profile</Nav.Link></Col>
              <Col><Nav.Link href="/Feed">Feed</Nav.Link></Col>
              <Col><Nav.Link href="/Shop">Shop</Nav.Link></Col>
            </Row>
          </Nav>
          {/* <Nav className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </Nav> */}
        </Container>
      </Navbar>
    );
  // } else {
  //   return (
  //     <ul className="flex-row">
  //       <li className="mx-1">
  //         <Link to="/signup">
  //           Signup
  //         </Link>
  //       </li>
  //       <li className="mx-1">
  //         <Link to="/login">
  //           Login
  //         </Link>
  //       </li>
  //     </ul>
  //   );
  // }
}

return (
  <header style={styles.container}>
    <Container>
      <Row>
        <Col><h1>Dare Devil Deals</h1></Col>
        <Col><nav>
          {showNavigation()}
        </nav></Col>
      </Row>
    </Container>
  </header>
);
}

export default Navigation;
