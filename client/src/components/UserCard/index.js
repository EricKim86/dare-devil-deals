import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'

import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS } from '../../utils/queries';

const styles = {
    container: {
        margin: '20px',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    },
    body: {
        color: '#204c39',
        backgroundColor: 'white',
        borderRadius: '10px',
        width: '20rem'
    },
    profileImage: {
        margin: '10px 20px 20px 20px',
        width: '50%',
        borderRadius: '50%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    topCard: {
        backgroundColor: '#204c39',
        borderRadius: '10px 10px 0 0'
    },
}

export default function ReviewCard() {
    const { data } = useQuery(QUERY_ALL_USERS);
    let user;

    if (data) {
        user = data.users;
    }

    return (
        <>
            <div className="container my-1">
                <Link to="/">← Back to Home</Link>
                <br />
                <br />
                {user ? (
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
                        {user.map(({ firstName, lastName, userName, location }, index) => (
                            <SwiperSlide key={index}>
                                <Card style={styles.body}>
                                    <div style={styles.topCard}>
                                        <Card.Img style={styles.profileImage} variant="top" src='https://picsum.photos/id/65/200/200' />
                                    </div>
                                    <Card.Body>
                                        <Card.Title><h3>{userName}</h3></Card.Title>
                                        <Card.Title><h6>{firstName} {lastName}</h6></Card.Title>
                                        <Card.Title><h6>250 Points</h6></Card.Title>
                                        <Button variant="primary"><i className="fa fa-user" aria-hidden="true"></i> View Profile</Button>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : null}
            </div>
        </>
    );
}
