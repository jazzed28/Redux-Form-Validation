import React, { Component } from 'react';
import FormCode from './FormCode';

class App extends Component {
  submit = (values) => {
    alert("submitted");
    console.log(values);
  }

  render() {
    return (
      <div className="container">
        <h3 className="jumbotron bg-dark text-light">Simple Redux From with validations</h3>
        <FormCode onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
