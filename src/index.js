import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "./postorder";

import Form from "./form";
import "./styles.css";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("/posts.json")
      .then(res => {
        const fetchedOrder = [];
        for (let key in res.data) {
          fetchedOrder.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({
          posts: fetchedOrder
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="App m-5">
        <Form />
        <div className="row">
          {this.state.posts.map(post => {
            return (
              <div className="list-group-item mb-4 p-5 col-md-6">
                <div className="card-title">{post.title}</div>
                <div className="card-body">{post.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
