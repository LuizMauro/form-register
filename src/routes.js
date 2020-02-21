import React from 'react';
import { BrowserRouter, Switch, Route }  from 'react-router-dom';

//rotas
import { UserForm } from './components/FormComponent/UserForm';


export default function Routes() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={UserForm} />
                <Route path="/register" component={UserForm} />
            </Switch>
        </BrowserRouter>
    );

};
