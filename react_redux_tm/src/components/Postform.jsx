import React, {Component} from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this
      .onChange
      .bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="#">
          <div>
            <label htmlFor="#">Title:</label>
            <br/>
            <input
              type="text"
              name="title"
              id=""
              onChange={this.onChange}
              value={this.state.title}/>
          </div>

          <div>
            <label htmlFor="#">Body:
            </label>
            <br/>
            <textarea onChange={this.onChange} value={this.state.body} name="body" id="" cols="30" rows="4"></textarea>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;