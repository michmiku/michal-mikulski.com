import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/home-screen/Navbar"
import Register from "./components/home-screen/Register.js"
import HomeScreen from "./components/home-screen/HomeScreen.js"
import Login from "./components/home-screen/Login.js"
import ListOfUsers from "./components/home-screen/ListOfusers.js"
import Music from './components/music-player/Music';

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