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
        height: '45vh'
    },
    gray: {
        color: 'gray',
    },
    body: {
        color: 'white',
        backgroundColor: '#204c39',
        borderRadius: '10px',
        width: '20rem',
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

                <h3>Future <span style={styles.gray}>planned enhancements for this application</span></h3>
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
                                    <Card.Title><h2>Add Friends</h2></Card.Title>
                                    <Card.Text>Ability to allow users to add other users to their friend's list.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>Powerful Filter System</h2></Card.Title>
                                    <Card.Text>Integrate a more granular filtering system for precise searches.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>Add Profile Images</h2></Card.Title>
                                    <Card.Text>Ability to customize a user's profile image.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>Level Up System</h2></Card.Title>
                                    <Card.Text>Reward users for purchases.  Allow user's to level up their profile/rank.</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>Recommended List</h2></Card.Title>
                                    <Card.Text>Ability to recommend experiences based on previous purchases.</Card.Text>
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