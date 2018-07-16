import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import LandingPage from './landingPage';
import ListPage from './listingsPage';
import {Container} from 'reactstrap';
import ErrorPage from './errorPage';
import BusinessPage from "./businessPage";

class App extends Component {

    constructor(){
        super();
        this.state = {
            category: "",

        }
    }
    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/listing" component={ListPage} />
                    <Route path="/listing/:business" component={BusinessPage} />
                    {/*<Route path={this.window.location}*/}
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>

        );
    }
}

export default App;
