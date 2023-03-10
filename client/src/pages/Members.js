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
        minHeight: '22rem'
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

                <h3>The Team <span style={styles.gray}>that created this application</span></h3>
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
                                    <Card.Title><h2>Danny Bedrossian</h2></Card.Title>
                                    <Card.Text>Reducers and Mutations</Card.Text>
                                    <Card.Text>Queries</Card.Text>
                                    <Card.Text>Actions</Card.Text>
                                    <Card.Text>Filter Functionality</Card.Text>
                                    <Card.Text>Typedef</Card.Text>
                                    <Card.Text>stripe</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>Rahel Hailu</h2></Card.Title>
                                    <Card.Text>typeDefs</Card.Text>
                                    <Card.Text>Resolves</Card.Text>
                                    <Card.Text>Auth</Card.Text>
                                    <Card.Text>Power Point</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>Joshua Carter</h2></Card.Title>
                                    <Card.Text>Models</Card.Text>
                                    <Card.Text>Seed File</Card.Text>
                                    <Card.Text>TypeDefs</Card.Text>
                                    <Card.Text>ReadMe</Card.Text>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card style={styles.body}>
                                    <Card.Title><h2>Eric Kim</h2></Card.Title>
                                    <Card.Text>Front-end Development</Card.Text>
                                    <Card.Text>Auth/Web Token</Card.Text>
                                    <Card.Text>Filter Functionality and Stripe</Card.Text>
                                    <Card.Text>TypeDefs and Resolvers</Card.Text>
                                    <Card.Text>Queries and Mutations</Card.Text>
                                    <Card.Text>Additional Seeds</Card.Text>
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