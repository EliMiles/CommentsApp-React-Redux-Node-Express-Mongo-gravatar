import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import MdStar from 'react-ionicons/lib/MdStar'
import * as actions from '../actions';

import './App.css';

class CommentDisplay extends Component {

    componentDidMount(){
        this.props.getAllComments() // call to getAllComments function in actions/index.js
    }

    render() {

        //console.log(this.props.comments); // gets all the comments from the general state ( the store! )

        const postItems = this.props.comments.map((item) =>
            <Row className="item">
                <Col sm={2}>
                    <img className="gravatar" alt="img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                </Col>
                <Col sm={10}>
                    <Row>
                        <Col sm={10} className="email">
                            <a href={item.email} className="active">{item.email}</a>
                        </Col>
                        <Col sm={1}><MdStar /></Col>
                        <Col sm={1} className="ratingNumber">{item.rating}</Col>
                    </Row>
                    <Row>
                        <Col sm={12} className="comment">{item.comment}</Col>
                    </Row>
                </Col>
            </Row>
        );

        return (
            <div className="App_content CommentDisplay_content">
                <Container>
                    {postItems}
                </Container>
            </div>
        );
    }
}

function mapStateToProps({ comments }){ // getting the updated general state ( the store! ) from src/index.js
    return { comments };
}

export default connect(mapStateToProps,actions)(CommentDisplay);