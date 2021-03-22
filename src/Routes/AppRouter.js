import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AboutPage } from '../Components/aboutUs/AboutPage';
import { HomePage } from '../Components/home/HomePage';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch >

                    <Route 
                        exact
                        path = '/'
                        component = {HomePage}
                    />

                    <Route 
                        exact
                        path = '/aboutUs'
                        component = {AboutPage}
                    />


                </Switch>
            </>
        </Router>
    )
}
