import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { startChecking } from '../actions/auth';
import { LoginScren } from '../components/auth/LoginScren';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = ()=>{

    const dispatch =  useDispatch();
    const { checking,uid } = useSelector(state =>state.auth);

    useEffect( ()=>{
        dispatch( startChecking());
        
    },[dispatch]);

    if(checking){
        return(<h5>Espere....</h5>)
    }
    
    return(
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                                exact path="/login" 
                                component = { LoginScren } 
                                isAuthenticated={ !!uid }
                                />
                        <PrivateRoute 
                            exact path="/" 
                            component={ CalendarScreen }
                            isAuthenticated={ !! uid }
                            />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}