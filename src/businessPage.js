import React, {Component} from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {ListGroup, ListGroupItem} from 'reactstrap';
import ListingItem from './listItem';
import {Link} from 'react-router-dom';
import sampleJSON from './data/data.json';


class BusinessPage extends Component {


    constructor(props){
        super(props);
    }

    render() {
        return(
        <div>
            <h2>Oh my god here you are at the business page</h2>
            <p>{this.props.match.params['business']}</p>
        </div>
        );
    };
}

export default BusinessPage;
