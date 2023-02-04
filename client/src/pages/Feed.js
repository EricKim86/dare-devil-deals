import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserCard from '../components/UserCard/';
import { Link } from 'react-router-dom';

const styles = {
    container: {
        margin: '20px',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh'
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

function Feed() {
    return (
        <div style={styles.container}>
            <h3>DISCOVER <span style={styles.gray}>what other users have experienced</span></h3>
            <Container>
                <Row>
                    <Col>
                        <UserCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Feed;