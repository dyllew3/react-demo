import React from 'react';


export class Test extends React.Component {
    render() {
      return <h1>Hello World!</h1>;
    }
}


export class Blah {
    render() {
        return <Test/>;
    }
}
