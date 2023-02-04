import React from "react";
import Card from 'react-bootstrap/Card';

import { useQuery } from '@apollo/client';
import { QUERY_EXPERIENCE } from '../../utils/queries';
import { useParams } from 'react-router-dom';

const styles = {
    container: {
        margin: '50px',
        color: 'white',
        textAlign: 'center',
        height: '200vh'
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
            {experience.reviews.map(({ description, title, createdAt }, index) => (
                <div key={index}>
                    <Card style={styles.reviewPost}>
                        <h4>{experience.reviews.title}</h4>
                        <h6>Posted At: {experience.reviews.createdAt}</h6>
                        <h5>{experience.reviews.description}</h5>
                    </Card>
                </div>
            ))}
        </div>
    );
}
