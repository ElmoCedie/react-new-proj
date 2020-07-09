import ReactDom from "react-dom";
import React from "react";

export default class App extends React.Component {
  render() {
    return <div>Test app</div>;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
