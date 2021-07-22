import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Users from "./react/components/users/Users";
import UserDetails from "./react/components/users/user/userDetails/UserDetails";
import Posts from "./react/components/posts/Posts";
import Comments from "./react/components/comments/Comments";
import {buttonStyle, styleHead} from "./react/components/constElements/styleConst";
import React from "react";





function App() {
    return (<div>
        <Router>
            <div style = {styleHead}><button style={buttonStyle}><Link to = {"/users"}>Users</Link></button></div>

            <Switch>
                <Route exact = {true} path = {"/users"} component = {Users}/>
                <Route exact = {true} path = {"/users/:id"} component = {UserDetails}/>
                <Route exact = {true} path = {'/posts'} component = {Posts}/>
                <Route exact = {true} path = {'/comments'} component = {Comments}/>
            </Switch>

        </Router>
    </div>);
}

export default App;
