import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import './App.css';

class AddCommentForm extends Component {
    render() {
        return (
            <div className="App_content">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formComment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control placeholder="Add your comment" />
                    </Form.Group>

                    <Form.Group controlId="formRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select">
                            <option hidden value={0}>Pick 1-5</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
};

export default AddCommentForm;