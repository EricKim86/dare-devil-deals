import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const styles = {
    form: {
        color: 'white',
        width: '25rem',
    }
}


function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
                userName: formState.userName,
                location: formState.location,
                bio: formState.bio,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className='container' style={styles.form}>
            <Link to="/login">← Go to Login</Link>

            <h2>Signup</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="flex-row space-between my-2">
                    <Form.Label htmlFor="firstName">First Name:</Form.Label>
                    <Form.Control
                        placeholder="First"
                        name="firstName"
                        type="text"
                        id="firstName"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form className="flex-row space-between my-2">
                    <Form.Group htmlFor="lastName">Last Name:</Form.Group>
                    <Form.Control
                        placeholder="Last"
                        name="lastName"
                        type="text"
                        id="lastName"
                        onChange={handleChange}
                    />
                </Form>
                <Form className="flex-row space-between my-2">
                    <Form.Group htmlFor="userName">User Name:</Form.Group>
                    <Form.Control
                        placeholder="User"
                        name="userName"
                        type="text"
                        id="userName"
                        onChange={handleChange}
                    />
                </Form>
                <Form className="flex-row space-between my-2">
                    <Form.Group htmlFor="lastName">Location:</Form.Group>
                    <Form.Control
                        placeholder="Location"
                        name="location"
                        type="text"
                        id="location"
                        onChange={handleChange}
                    />
                </Form>
                <Form className="flex-row space-between my-2">
                    <Form.Group htmlFor="email">Email:</Form.Group>
                    <Form.Control
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </Form>
                <Form className="flex-row space-between my-2">
                    <Form.Group htmlFor="pwd">Password:</Form.Group>
                    <Form.Control
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </Form>
                <Form className="flex-row space-between my-2">
                    <Form.Group htmlFor="bio">Bio:</Form.Group>
                    <Form.Control
                        placeholder="Tell us about yourself"
                        name="bio"
                        as="textarea"
                        type="text"
                        id="bio"
                        onChange={handleChange}
                        rows={8}
                    />
                </Form>
                <br />
                <Form className="flex-row flex-end">
                    <Button type="submit">Submit</Button>
                </Form>
            </Form>
            <br />
        </div>
    );
}

export default Signup;