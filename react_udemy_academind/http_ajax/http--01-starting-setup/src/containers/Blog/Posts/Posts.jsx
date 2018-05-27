import React, {Component} from 'react';

class Posts extends Component {
    state = {
        posts: [],
        // selectedPostId: null,
        // error: false
      };
    

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
                        clicked={() => this.postSelectedHandler(post.id)}/>);
                });
        }

        return (
            <section className="Posts">{posts}</section>
        );
    }
}

export default Posts;