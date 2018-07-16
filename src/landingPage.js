import React, { Component } from 'react';
import logo from './resist_circle.svg';
import './App.css';
import {Button} from 'reactstrap';
import BackgroundImage from 'react-background-image-loader';
import {Link} from 'react-router-dom' ;

class LandingPage extends Component {



    render() {
        return (
            <div className="jumbotron">
                <div className="img-content">
                <img src={logo} className="App-logo" alt="logo" />
                </div>
                <header className="App-header">
                    <h1 className="App-title">Welcome to BOB.</h1>
                </header>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br><br></br>
                <br></br>
                <br></br>
                <br></br><br></br>
                <br></br>
                <br></br>
                <br></br><br></br>
                <br></br>
                <div className="button-container">
                        <Link to={"/listing"}>
                    <Button outline color="primary" size="lg">ENTER</Button>
                        </Link>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default LandingPage;