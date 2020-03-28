import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Characters from "./containers/Characters";
import Stories from "./containers/Stories";
import Navigation from './components/Nav';

function App() {
    return (
        <>
            <Navigation>
                <Link to='/'>Main</Link>
                <Link to='/characters'>Characters</Link>
                <Link to='/stories'>Stories</Link>
            </Navigation>
            <Switch>
                <Route path='/characters'>
                    <Characters/>
                </Route>
                <Route path='/stories'>
                    <Stories/>
                </Route>
            </Switch>
        </>
    )
}

export default App;


