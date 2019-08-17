import React, { Component } from 'react';
import { Form , InputGroup} from 'react-bootstrap';
import IosSearch from 'react-ionicons/lib/IosSearch'
import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';

class SearchComment extends Component {

    constructor(props){
        super(props)

        this.state = {
            searchInput:''
        }
    }

    changeHandler = (e) => {

        this.setState({[e.target.name]:e.target.value})
        
        this.props.filterComments(e.target.value, this.props.comments); // call to addComment function in actions/index.js

        //console.log(this.state.searchInput);
    }

    render() {

        //console.log(this.props.comments); // gets all the comments from the general state ( the store! )

        return (
            <div className="App_content SearchComment_content">
                <Form noValidate>
                    <InputGroup>
                        <IosSearch className="searchIcon" />
                        <Form.Control
                            className="searchInput"
                            name="searchInput"
                            value={this.state.searchInput}
                            type="text"
                            placeholder="Filter"
                            aria-describedby="inputGroupPrepend"
                            onChange={this.changeHandler}
                        />
                    </InputGroup>
                </Form>
            </div>
        );
    }
};

function mapStateToProps({ comments }){ // getting the updated general state ( the store! ) from src/index.js
    return { comments };
}

export default connect(mapStateToProps,actions)(SearchComment);