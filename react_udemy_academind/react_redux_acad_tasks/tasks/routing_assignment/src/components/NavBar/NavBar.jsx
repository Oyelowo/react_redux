import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import './NavBar.css';
import Users from '../../containers/Users/Users';
import Courses from '../../containers/Courses/Courses';
import NoMatch from '../NoMatch/NoMatch';
// import Course from '../../containers/Course/Course';


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
{/* ordering is important is switch */}
                <Switch>
                    <Route path="/users" component={Users} />
                    {/* <Route path="/courses/:courseId" component={Course}/> */}
                    <Route path="/courses" component={Courses}/>
                    <Redirect from="/all-courses" to="/courses" />
                    <Route component={NoMatch} />
                </Switch>

            </div>
        )
    }
}

export default NavBar;