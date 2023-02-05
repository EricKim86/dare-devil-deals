import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
    icon: {
        padding: '40px 30px 0px 30px',
        fontSize: '50px',
        textAlign: 'center',
        color: 'white',
    },
}
export default function Home() {

    return (
        <div>
            <br />
            <br />
            <Container>
                <Row>
                <Col><div style={styles.icon}>
                    <h2>Site Links</h2>
                    <Col><h6><a href='https://lit-dusk-01074.herokuapp.com/pitch'>Why Dare Devil Deals?</a></h6></Col>
                    <Col><h6><a href='https://lit-dusk-01074.herokuapp.com/motivation'>Motivation and Design</a></h6></Col>
                    <Col><h6><a href='https://lit-dusk-01074.herokuapp.com/technology'>Technology</a></h6></Col>
                    <Col><h6><a href='https://lit-dusk-01074.herokuapp.com/future'>Future Updates</a></h6></Col>
                    <Col><h6><a href='https://lit-dusk-01074.herokuapp.com/members'>Meet the Team</a></h6></Col>
                    </div></Col>
                <Col><div style={styles.icon}>
                        <h2>Our Company</h2>
                        <h5>
                          We seek to provide an extensive collection of the most exciting experiences at an affordable price.
                        </h5>
                    </div></Col>
                    <Col><div style={styles.icon}>
                        <h2>Founders</h2>
                        <h5>
                        <Col><a href='https://github.com/dbedrossian' target="blank">Danny Bedrossian</a></Col>
                        <Col><a href='https://github.com/ririhailu' target='blank'>Rahel Hailu</a></Col>
                        <Col><a href='https://github.com/JoshuaCarter99' target='blank'>Josh Carter</a></Col>
                        <Col><a href='https://github.com/EricKim86' target='blank'>Eric Kim</a></Col>
                        </h5>
                    </div></Col>
                    <Col><div style={styles.icon}>
                        <h2>Follow Us</h2>
                        <a href='https://www.facebook.com/' target="blank"><i style={styles.space} className='fa-brands fa-facebook'></i> </a>
                        <a href='https://www.instagram.com/' target='blank'><i style={styles.space} className='fa-brands fa-instagram'></i> </a>
                        <a href='https://www.twitter.com/' target='blank'><i style={styles.space} className='fa-brands fa-twitter'></i> </a>
                    </div></Col>
                    <br />
                </Row>
            </Container>
        </div >

    )
}
