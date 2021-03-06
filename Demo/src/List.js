import React from "react";

export class List extends React.Component {

  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      userInput: '',
      toDoList: []
    };
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput;
    const arrList = this.state.toDoList;
    arrList.push(itemsArray);
    this.setState({
      toDoList: arrList,
      userInput: ""
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    // Generate items
    const items = this.state.toDoList.map(function (item) {
      return <li className="list-group-item list-group-item-primary" onClick={() => alert("Deleted")}> {item} </li>;
    });
    return (
      <div>
        <h1 className="navbar navbar-expand-lg navbar-light bg-light">My List: {this.props.title}</h1>
        <br />

        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          placeholder="Enter item here" /><br />
        <button onClick={this.handleSubmit}>Add to list</button>
        <br />

        <ul className="list-group">
          {items}
        </ul>
      </div>
    );
  }
};