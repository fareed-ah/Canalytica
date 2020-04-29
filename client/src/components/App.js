import React from "react";
import "./assets/css/App.css";
import DashBoard from "./Dashboard/Dashboard";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <DashBoard></DashBoard>
      </div>
    );
  }
}

export default App;
