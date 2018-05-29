import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import './NavBar.css';
import Users from '../../containers/Users/Users';
import Courses from '../../containers/Courses/Courses';

class NavBar extends Component {

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/users">Users</NavLink>
                         </li>
                            <li>
                                <NavLink to="/courses">Courses</NavLink>
                         </li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/courses" component={Courses}/>
                </Switch>

            </div>
        )
    }
}

export default NavBar;