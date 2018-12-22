import React, { Component } from "react";
import axios from "./postorder";

const initialState = {
  title: "",
  body: ""
};

export default class Form extends Component {
  state = initialState;

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .post("/posts.json", this.state)
      .then(res => console.log("post success"))
      .catch(err => console.log(err));

    this.setState({
      ...initialState
    });

    // console.log(this.state);
  };

  render() {
    let { title, body } = this.state;

    return (
      <form onSubmit={this.submitHandler} className="card p-3 mb-5">
        <div className="form-group">
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="enter title"
            value={title}
            onChange={this.changeHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="body"
            id="body"
            className="form-control"
            placeholder="enter body"
            value={body}
            onChange={this.changeHandler}
          />
        </div>
        <button className="mt-2 btn btn-primary">Submit Form</button>
      </form>
    );
  }
}
