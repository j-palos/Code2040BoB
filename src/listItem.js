import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Media} from 'reactstrap';


const ListingItem = (props) => (
    <div>
        <Media>
            <Media left>
                {/*<Media object data-src={props.venue['photo_link']} alt="Generic placeholder image"/>*/}
                <img src={props.venue['photo_link']} width={'64px'} height={'64px'}></img>
            </Media>
            <Media body>
                <Media heading>
                    {props.venue['title']}
                </Media>
                {props.venue['description']}
            </Media>
        </Media>
    </div>
);


export default ListingItem;