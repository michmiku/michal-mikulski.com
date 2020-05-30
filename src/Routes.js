import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Register from "./components/Register.js"
import HomeScreen from "./components/HomeScreen.js"
import Login from "./components/Login.js"
import ListOfUsers from "./components/ListOfusers.js"
import Music from './components/Music';

const Routes = () => {
    return (
        <Router>
            <Navbar />

            <Route path="/" exact component={HomeScreen} />
            <Route path="/michal-mikulski" component={HomeScreen} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/listofusers" component={ListOfUsers} />
            <Route path="/music" component={Music} />
        </Router>
    );
}
export default Routes;