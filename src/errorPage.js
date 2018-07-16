import React, {Component} from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {ListGroup, ListGroupItem} from 'reactstrap';
import ListingItem from './listItem';
import {Link} from 'react-router-dom';
import sampleJSON from './data/data.json';


const ErrorPage = () => (
    <div>
        <h2>Oh my god here you are at the error page dumbass</h2>
    </div>

);

export default ErrorPage

