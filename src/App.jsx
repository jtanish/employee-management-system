import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./Components/Navbar";
import EmployeeForm from "./Components/EmployeeForm";
// import EmployeeList from "./Components/EmployeeList";

class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <EmployeeForm></EmployeeForm>
        {/* <EmployeeList></EmployeeList> */}
      </>
    );
  }
}
export default App;
