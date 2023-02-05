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

                <h3>Why <span style={styles.gray}>choose Dare Devil Deals?</span></h3>
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
                                    <Card.Title><h2>The Pitch!</h2></Card.Title>
                                    <Card.Text>One of the biggest challenges of life is to look above all the minor distractions of today and envision the bigger picture.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>The Pitch!</h2></Card.Title>
                                    <Card.Text>Unfortunately, most people are so caught up in the day to day activities.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>The Pitch!</h2></Card.Title>
                                    <Card.Text>The best life is the one that is the most interesting.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>The Pitch!</h2></Card.Title>
                                    <Card.Text>Dare Devil Deals will help you explore variety of activities that will satisfy your need of explosive and fun adventures.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>The Pitch!</h2></Card.Title>
                                    <Card.Text>This app will tap into your competitive side by collecting points for all your activities and levels.</Card.Text>
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