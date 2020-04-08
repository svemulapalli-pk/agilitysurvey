import React from "react";
import { Form, Button } from 'react-bootstrap';

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form className="user-register-form">
                <Form.Group controlId="userFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
            
                <Form.Group controlId="userLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>

                <Form.Group controlId="userLastName">
                    <Form.Label>Email address (this is where your survey results will be sent)</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>

                <Button variant="success" type="submit">Submit</Button>
            </Form>
        );
    }
};
