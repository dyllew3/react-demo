import React from "react";

/**
 * Counter class
 */
export class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          value: null,
          count: 0
        };
      }

    render (){
        return (
        <div  class="card" style={{ width: "18rem"}}> 
            <div class="card-body"> <p class="card-text"> {this.state.count} </p> </div>
        <button
        type="button" class="btn btn-info btn-lg"
        onClick={() => this.setState({count: this.state.count + 1})}
      >
       Increment
      </button></div>
        );
    }
}