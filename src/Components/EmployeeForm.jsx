import React, { Component } from "react";
import "./../Style/EmployeeForm.css";
import EmployeeList from "./EmployeeList";
import Navbar from "./Navbar";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeName: "",
      employeeRole: "",
      employeeSalary: "",
      department: "",
      employees: [],
      employeeSearch: "",
    };
  }

  SubmitEmployeeDetails = (event) => {
    const {
      employeeName,
      employeeRole,
      employeeSalary,
      department,
      employees,
    } = this.state;
    event.preventDefault();

    const newEmployee = {
      employeeName: employeeName,
      employeeRole: employeeRole,
      employeeSalary: employeeSalary,
      department: department,
    };

    if (
      employeeName.trim() === "" ||
      employeeRole.trim() === "" ||
      employeeSalary.trim() === "" ||
      department.trim() === ""
    ) {
      alert("Fields Cannot Be Empty");
    } else {
      this.setState((prev) => ({
        employees: [...prev.employees, newEmployee],
        employeeName: "",
        employeeRole: "",
        employeeSalary: "",
        department: "",
      }));
    }
  };

  UpdateEmployee = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  DeleteCard = (index) => {
    const UpdatedCard = this.state.employees.filter(
      (employee, currentIndex) => currentIndex !== index,
    );
    this.setState({
      employees: UpdatedCard,
    });
  };
  render() {
    const {
      employeeName,
      employeeRole,
      employeeSalary,
      department,
      employees,
      employeeSearch,
    } = this.state;
    // console.log(Employees);
    return (
      <div className="Employeeform">
        <form onSubmit={this.SubmitEmployeeDetails}>
          <div>
            <label>Employee Name: </label>
            <input
              type="text"
              name="employeeName"
              value={employeeName}
              onChange={this.UpdateEmployee}
              placeholder="Enter Your Name"
            ></input>
          </div>
          <div>
            <label>Employee Role: </label>
            <input
              type="text"
              name="employeeRole"
              value={employeeRole}
              onChange={this.UpdateEmployee}
              placeholder="Enter Your Role"
            ></input>
          </div>
          <div>
            <label>Salary: </label>
            <input
              type="number"
              name="employeeSalary"
              value={employeeSalary}
              onChange={this.UpdateEmployee}
              placeholder="Enter Your Salary"
            ></input>
          </div>
          <div>
            <label>Department: </label>
            <input
              type="text"
              name="department"
              value={department}
              onChange={this.UpdateEmployee}
              placeholder="Enter Your Department"
            ></input>
          </div>
          <button type="submit">Add Employee</button>
        </form>
        <EmployeeList
          Employees={employees}
          DeleteCard={this.DeleteCard}
        ></EmployeeList>
      </div>
    );
  }
}

export default EmployeeForm;
