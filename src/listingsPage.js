import React, {Component} from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {ListGroup, ListGroupItem} from 'reactstrap';
import ListingItem from './listItem';
import {Link} from 'react-router-dom';
import sampleJSON from './data/data.json';

class ListPage extends Component {

    constructor() {
        super();
        this.state = {
            filter: [],
            listings: [],
            currentPlace: "",
        }
    }

    componentDidMount() {
        /*
                let data = {};
                //todo prepend this
                let BASE = 'localhost';
                axios.get(`${BASE}/api/venues/${this.props.category}`)
                    .then((response) => {
                        data = response.data;
                        return data;
                    })
                    .then((data) => {
                            let listing = data;
                            this.setState({
                                listings: listing,
                                isLoaded: true,
                            })
                        }
                    )*/

        this.setState({
            listings: sampleJSON,
        })
    }

    render() {

        let listings = this.state.listings;

        return (
            <div className={"listingPages"}>
                <ListGroup>
                    {
                        this.state.listings.map((listing) => {
                                return (
                                    <div key={listing['title']}>
                                        <Link to={'listing/' + listing['title']}>
                                            <ListGroupItem action>
                                                <ListingItem venue={listing}/>
                                            </ListGroupItem>
                                        </Link>
                                    </div>
                                );
                            }
                        )
                    }
                </ListGroup>
            </div>
        )
    }
}

export default ListPage;