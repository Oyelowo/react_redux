import React, {Component} from "react";
// import Post from "../../components/Post/Post"; import FullPost from
// "../../components/FullPost/FullPost"; import NewPost from
// "../../components/NewPost/NewPost";
import "./Blog.css";
// import axios from "axios";
import Posts from "./Posts/Posts";
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import asyncComponent from "../../hoc/asyncComponent";
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
// import axios from '../../axios';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
})

class Blog extends Component {
  state={
    auth: true
  }

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
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
          <Route path="/posts"  component={Posts}/>
          {/* <Route render={()=> <h1> Not found</h1>}/> */}
          <Redirect from="/" to="/posts" />
          <Route path="/"  component={Posts}/>
        </Switch>
      </div>
    );
  }
}

export default Blog;
