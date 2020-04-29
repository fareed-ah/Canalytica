import React from "react";
import "./assets/css/App.css";
import DashBoard from "./components/Dashboard";

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
