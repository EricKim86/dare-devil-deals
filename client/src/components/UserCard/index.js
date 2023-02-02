import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const styles = {
    container: {
        margin: '20px',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    },
    body: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '10px',
        width: '20rem'
    },
    profileImage: {
        margin: '10px 0 20px 0px',
        width: '50%',
        borderRadius: '50%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
}

export default function ReviewCard() {
    return (
        <div style={styles.container}>
            <Card style={styles.body}>
                <Card.Img style={styles.profileImage} variant="top" src='https://picsum.photos/id/65/200/200' />
                <Card.Body>
                    <Card.Title><h3>Corgiz4Life27</h3></Card.Title>
                    <Card.Title><h6>Brittany Rodgers</h6></Card.Title>
                    <Card.Title><h6>250 Points</h6></Card.Title>
                    <Button variant="primary"><i class="fa fa-user" aria-hidden="true"></i> View Profile</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
