import React, {Component} from "react";
// import Post from "../../components/Post/Post"; import FullPost from
// "../../components/FullPost/FullPost"; import NewPost from
// "../../components/NewPost/NewPost";
import "./Blog.css";
// import axios from "axios";
import Posts from "./Posts/Posts";
import {Route, NavLink, Switch} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
// import axios from '../../axios';

class Blog extends Component {

  render() {

    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>

                {/* This should be used instead of anchor(a) tag
                to prevent reloading of all pages*/}
                <NavLink
                  to="/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                  color: 'fa923f',
                  textDecoration: 'underline',
                  background: '#eaeaea',
                  padding: '10px'
                }}>Posts</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                  pathname: "/new-post",
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* <Route path="/" exact render={()=> <h1>Home</h1>} />
      <Route path="/" render={()=> <h1>Home2</h1>} /> */}

        <Switch>
          <Route path="/new-post" component={NewPost}/>
          <Route path="/" component={Posts}/>
        </Switch>
      </div>
    );
  }
}

export default Blog;
