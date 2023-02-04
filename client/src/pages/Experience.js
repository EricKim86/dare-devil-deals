import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ReviewCard from '../components/ReviewCard'
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
        height: '200vh'
    },
    center: {
        textAlign: 'center',
    },
    body: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '10px',
        width: '40rem'
    },
    reviewForm: {
        color: 'white',
        borderRadius: '10px',
        backgroundColor: '#204c39',
    },
    reviewPost: {
        color: 'white',
        borderRadius: '10px',
        backgroundColor: '#204c39',
        padding: '10px'
    },
    profileImage: {
        objectFit: 'cover',
        maxHeight: '29rem',
        borderRadius: '10px 10px 0 0'
    },
}

export default function Experience() {

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
                    <Col><Card style={styles.body} className='border border-tertiary'>
                        <Card.Img style={styles.profileImage} variant="top" src={`/images/experiences/${experience.image}`} />
                        <Card.Body>
                            <Card.Title><h3>{experience.name}</h3></Card.Title>
                            <Card.Text>
                                {experience.description}
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                    <Col>
                        <Card style={styles.reviewForm} className='container border border-tertiary'>
                            <h2>Write a Review</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter a Title" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Review</Form.Label>
                                    <Form.Control as="textarea" placeholder="Write a Review" rows={11} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <br />
                                <br />
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <Col className='container' style={styles.center}>
                    <h2>User Reviews:</h2>
                    <Card className='container border border-tertiary' style={styles.reviewPost}>
                        {/* {reviews} */}
                    </Card>
                </Col>
            </Container>
        </div>
    );
}
