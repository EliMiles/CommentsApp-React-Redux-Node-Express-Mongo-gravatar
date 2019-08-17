import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';

class CommentDisplay extends Component {

    componentDidMount(){
        this.props.getAllComments() // call to getAllComments function in actions/index.js
    }

    render() {

        console.log(this.props.comments); // gets all the comments from the general state ( the store! )

        return (
            <div className="App_content CommentDisplay_content">
                <Container>
                    <Row>
                        <Col sm={1} className="borderTest">img</Col>
                        <Col sm={11}>
                            <Row>
                                <Col sm={11} className="borderTest">email</Col>
                                <Col sm={1} className="borderTest">rating</Col>
                            </Row>
                            <Row className="borderTest">comment</Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

function mapStateToProps({ comments }){
    return { comments };
}

export default connect(mapStateToProps,actions)(CommentDisplay);