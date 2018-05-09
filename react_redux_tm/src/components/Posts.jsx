import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {
  // not needed anymore cos this now comes from redux constructor(props) {
  // super(props)     this.state = {       posts: []     };   }
  // componentWillMount() {   // fetct request here
  // fetch('https://jsonplaceholder.typicode.com/posts')     .then(res =>
  // res.json())     .then(data => this.setState({posts: data})); }

  componentWillMount() {
    this
      .props
      .fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this
        .props
        .posts
        .unshift(nextProps.newPost)
    }
  }

  //state was changed to props below
  render() {
    const PostItems = this
      .props
      .posts
      .map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))
    return (
      <div>
        <h1>Posts</h1>
        {PostItems}
      </div>
    )
  }

}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({posts: state.posts.items, newPost: state.posts.item});

// export default Posts;
export default connect(mapStateToProps, {fetchPosts})(Posts);