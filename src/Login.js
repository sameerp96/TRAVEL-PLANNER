import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';


function Login() {

    return (
        <div>
            <Link to="/">
            <img className="logo" alt='logo' src="https://sameerp96.github.io/images/logo11.PNG" />
            </Link>

            <div className="login_form">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I accept the Terms and Conditions" />
                </Form.Group>

                <div className="button_box">
                <Button className="submit_btn" variant="primary" type="submit">
                    Submit
                </Button>

                <Button className="signup_btn" variant="secondary" type="submit">
                    Signup
                </Button>
                </div>

                </Form>
            </div>

        </div>
    )
}

export default Login
