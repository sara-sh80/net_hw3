import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Page from "./Components/Page";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/:page_id" component={Page}/>
                    <Route path="/" component={Page}/>
                </Switch>
            </div>
        );
    }
}

export default App;