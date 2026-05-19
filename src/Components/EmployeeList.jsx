import React, { Component } from "react";
import "./../Style/EmployeeList.css";

class EmployeeList extends Component {
  render() {
    const { Employees, DeleteCard } = this.props;
    return (
      <>
        <div className="Cards">
          {Employees.map((Employee, index) => (
            <div className="Card" key={index}>
              <h3>Employee Number: {index}</h3>
              <h3>Employee Name = {Employee.employeeName}</h3>
              <h3>Employee Role = {Employee.employeeRole}</h3>
              <h3>Employee Salary = {Employee.employeeSalary}</h3>
              <h3>Department = {Employee.department}</h3>
              <button onClick={() => DeleteCard(index)}>Delete</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default EmployeeList;
