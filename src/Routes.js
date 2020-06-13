import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/home-screen/Navbar"
import Register from "./components/home-screen/Register"
import HomeScreen from "./components/home-screen/HomeScreen"
import Login from "./components/home-screen/Login"
import ListOfUsers from "./components/home-screen/ListOfusers"
import Music from './components/music-player/Music';
import Covid19 from './components/covid-data/Covid19'

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
            <Route path="/covid19" component={Covid19} />

        </Router>
    );
}
export default Routes;