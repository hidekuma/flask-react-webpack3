import React, {Component} from 'react';
import Header from './components/Header/Header';

import {BrowserRouter as Router} from 'react-router-dom';
//RouteConfig
import { RouteConfig } from './routes/RouteConfig';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <RouteConfig/>
                </div>
            </Router>
        );
    }
}

export default App