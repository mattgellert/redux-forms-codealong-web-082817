import React, { Component } from 'react'

class CreateTodo extends Component {

  state = {
    input: ""
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    }, () => {console.log(this.state.input)});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state.input
    });
    this.setState({
      input: ""
    });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input onChange={this.handleChange} type="text" value={this.state.input}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  };
};

export default CreateTodo;
