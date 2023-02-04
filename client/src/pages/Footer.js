import React from 'react';

const styles = {
    icon: {
        padding: '40px 30px 0px 30px',
        fontSize: '50px',
        textAlign: 'center',
        color: 'white',
        padding: '5px'
    },
}
export default function Home() {

    return (
        <div className='container'>
            <div style={styles.icon}>
                <h2>Follow Us</h2>
                <a href='https://www.google.com' target="blank"><i style={styles.space} className='fa-brands fa-facebook'></i> </a>
                <a href='https://www.google.com' target='blank'><i style={styles.space} className='fa-brands fa-instagram'></i> </a>
                <a href='https://www.google.com' target='blank'><i style={styles.space} className='fa-brands fa-twitter'></i> </a>
            </div>
            <br />
        </div >
    )
}
