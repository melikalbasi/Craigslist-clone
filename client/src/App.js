import React, { Component } from 'react';
import Items from "./pages/Items";

class App extends Component {
  render() {
    console.log("Rendering App");
    return (
      <div>
        <h2>This is app.js</h2>
        <Items />
      </div>
    );
  }
}

export default App;
