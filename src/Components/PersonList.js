import React, { Component } from "react";
import axios from "axios";

class LoremIpsum extends Component {
  state = {
    LoremIpsum: []
  };

  componentDidMount() {
    let URL = "https://jsonplaceholder.typicode.com/posts"
    axios.get(URL).then(res => {
      console.log(res.data);
      this.setState({
        LoremIpsum: res.data
      });
    });
  }

  render() {
    return (
      <div className="list-group">
        {this.state.LoremIpsum.map(li => (
          <div
            key={li.id}
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{li.title}</h5>
            </div>
            <p className="mb-1">{li.body}</p>
          </div>
          //   <ul className="list-group-item list-group-item-action flex-column align-items-start active" key={li.id}>
          //   <li  className="d-flex w-100 justify-content-between mb-1"> {li.title}</li>
          //   <li>{li.body}</li>
          //   </ul>
        ))}
      </div>
    );
  }
}

export default LoremIpsum;
