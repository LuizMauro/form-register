import React from 'react';
import { BrowserRouter, Switch, Route }  from 'react-router-dom';

//rotas
import Home from './pages/Home'
import { UserForm } from './components/UserForm'


export default function Routes() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={UserForm} />
            </Switch>
        </BrowserRouter>
    );

};
