import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_EXPERIENCE } from '../utils/queries';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const styles = {
    container: {
        margin: '50px',
        color: 'white',
        textAlign: 'center',
        height: '100vh'
    },
    body: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '10px',
        width: '40rem'
    },
    reviewForm: {
        color: 'black',
        borderRadius: '10px',
    },
    profileImage: {
        objectFit: 'cover',
        maxHeight: '30rem',
        borderRadius: '10px 10px 0 0'
    },
}

export default function ReviewCard() {

    const { id } = useParams();

    const { data } = useQuery(QUERY_EXPERIENCE, {
        variables: { _id: id }
    });

    const experience = data?.experience || {};

    return (
        <div style={styles.container}>
            <h2>Check out what other users think</h2>
            <Link to="/Shop">← Back to Shop</Link>
            <br />
            <br />

            <Container>
                <Row>
                    <Col><Card style={styles.body}>
                        <Card.Img style={styles.profileImage} variant="top" src={`/images/experiences/${experience.image}`} />
                        <Card.Body>
                            <Card.Title><h3>{experience.name}</h3></Card.Title>
                            <Card.Text>
                                {experience.description}
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                    <Col>
                        <Card style={styles.reviewForm} className='container'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Review Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter a Title" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Review</Form.Label>
                                    <Form.Control type="text" placeholder="Write a Review" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <Col>
                    <h2>Reviews will populate here</h2>
                </Col>
            </Container>
        </div>
    );
}
