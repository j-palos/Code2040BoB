import React, {Component} from "react";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import LandingPage from './landingPage'
import ListPage from './listingsPage';
import {Container} from 'reactstrap';

class App extends Component {

    constructor(){
        super();
        this.state = {
            category: "",
        }
    }

    render() {
        return (
            <Container>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path ="/listings" component={ListPage} />
                </Switch>
            </BrowserRouter>
            </Container>
        );
    }
}

export default App;
