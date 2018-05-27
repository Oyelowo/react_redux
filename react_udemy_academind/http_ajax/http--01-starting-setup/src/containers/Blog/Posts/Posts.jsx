import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

// import {Link} from 'react-router-dom';
class Posts extends Component {
    state = {
        posts: []
        // selectedPostId: null, error: false
    };

    componentDidMount() {
        console.log(this.props)
        axios
            .get("/posts")
            .then(response => {
                const posts = response
                    .data
                    .slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Oyelowo"
                    };
                });
                this.setState({posts: updatedPosts});
                // console.log(response);
            })
            .catch(error => {
                // this.setState({error: true});
                console.log(error);
            });
    }

    postSelectedHandler = id => {
        // this.setState({selectedPostId: id}); this.props.history.push({pathname: '/' +
        // id});
        this
            .props
            .history
            .push('/' + id);
    }

    render() {
        let posts = <p style={{
            textAlign: "center"
        }}>Something Went wrong</p>;
        if (!this.state.error) {
            posts = this
                .state
                .posts
                .map(post => {
                    return (<Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        {...this.props}
                        clicked={() => this.postSelectedHandler(post.id)}/>);
                });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
            </div>

        );
    }
}

export default Posts;