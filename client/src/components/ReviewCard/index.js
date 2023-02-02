import React from "react";
import Card from 'react-bootstrap/Card';

const styles = {
    container: {
        margin: '20px',
        color: 'white',
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
                    <Card.Title><h3>Brittany Rodgers</h3></Card.Title>
                    <Card.Title><h6>Posted: January, 2, 2023</h6></Card.Title>
                    <Card.Text>
                        "This Experience was wonderful!  More text explaining the experience goes here to fill up space so I can see how it looks once it is formatted."
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
