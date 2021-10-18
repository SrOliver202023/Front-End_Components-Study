import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './views/Login';
import Register from './views/Register';
import Feed from './views/Feed';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/feed" component={Feed}/>

            </Switch> 
      </BrowserRouter>
    )
}

