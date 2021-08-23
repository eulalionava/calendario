import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScren } from '../components/auth/LoginScren';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = ()=>{
    return(
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component = { LoginScren } />
                        <Route exact path="/" component={ CalendarScreen }/>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}