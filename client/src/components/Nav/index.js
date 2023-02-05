import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const styles = {
  container: {
    color: '#9ec378',
    fontSize: '18px',
  },
  fontStyle: {
    fontFamily: `rock salt`,
    fontSize: '26px',
  }
}


function Navigation() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Navbar bg="dark" variant="dark" expand='lg'>
          <Row>
            <Col><DropdownButton id="basic-nav-dropdown"
              title="About"
              menuVariant="dark">
              <Dropdown.Item><Link to="/pitch">Why Dare Devil Deals?</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/motivation">Motivation and Design</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/technology">Technology</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/future">Future Updates</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/members">Meet the Team</Link></Dropdown.Item>
            </DropdownButton></Col>
            <Col><Link to="/">Home </Link></Col>
            <Col><Link to="/profile">Profile</Link></Col>
            <Col><Link to="/feed">Feed</Link></Col>
            <Col><Link to="/shop">Shop</Link></Col>
            <Col><Link to="/cart">MyCart</Link></Col>
            <Col className="mx-1"><a href="/" onClick={() => Auth.logout()}>Logout</a>
            </Col>
          </Row>
        </Navbar>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header style={styles.container}>
      <Container>
        <Row>
          <Col>
            <h1><span style={styles.fontStyle}>Dare Devil</span> Deals</h1>
          </Col>
          <Col>
            <nav>
              {showNavigation()}
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Navigation;
