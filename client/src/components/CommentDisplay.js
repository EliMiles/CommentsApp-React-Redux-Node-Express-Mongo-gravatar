import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
//import * as actions from '../actions';

import './App.css';

class CommentDisplay extends Component {

    // componentDidMount(){
        
    //     this.props.getAllComments()
    // }

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         email:'',
    //         comment:'',
    //         rating: 0
    //     }
    // }

    // changeHandler = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    // }

    // submitHandler = (e) => {
    //     e.preventDefault()
    //     //console.log(this.state)
    //     this.props.addComment(this.state);

    //     this.setState({
    //         email:'',
    //         comment:'',
    //         rating: 0
    //     })
    // }

    render() {

        console.log(this.props);

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

function mapStateToProps({ getAllComments }){
    return { getAllComments };
}

export default connect(mapStateToProps)(CommentDisplay);