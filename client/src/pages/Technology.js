import React from "react";
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'


const styles = {
    container: {
        margin: '20px',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    },
    gray: {
        color: 'gray',
    },
    body: {
        color: 'white',
        backgroundColor: '#204c39',
        borderRadius: '10px',
        padding: '20px',
        minHeight: '20rem'
    },
    size: {
        fontSize: '22px'
    }
}

function Feed() {
    return (
        <div className='container'>
            <Link to="/">← Back to Home</Link>
            <div style={styles.container}>

                <h3>Technology <span style={styles.gray}>that made this application possible</span></h3>
                <br />
                <Container>
                    <Row>
                        <Swiper
                            freeMode={true}
                            grabCursor={true}
                            modules={[FreeMode]}
                            className='mySwiper'
                            scrollbar={true}
                            slidesPerView={3}
                            spaceBetween={10}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                1100: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1500: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>React Bootstrap</h2></Card.Title>
                                    <Card.Text>CSS framework that powers the styling of the front-end in our application.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>Swiper</h2></Card.Title>
                                    <Card.Text>Modern touch slider, simple and elegant.  Utilized to transition cards and images.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>Stripe</h2></Card.Title>
                                    <Card.Text>Payment API utilized to process payment transactions from our shop.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>GraphQL, Node.js, Express.js</h2></Card.Title>
                                    <Card.Text>Utilized to execute queries and power our server.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>MongoDB, Mongoose</h2></Card.Title>
                                    <Card.Text>Our document database of choice!  Simple and powerful.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>GitHub, Heroku</h2></Card.Title>
                                    <Card.Text>Allowed the founding members and designers to collaborate and to create this application and showcase it to you!</Card.Text>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Feed;