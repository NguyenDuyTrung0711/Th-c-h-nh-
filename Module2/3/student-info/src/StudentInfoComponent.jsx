import React, { Component } from "react";

class StudentInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Nguyễn Văn A", age: 20, address: "Hà Nội" },
        { id: 2, name: "Trần Thị B", age: 21, address: "Hải Phòng" },
        { id: 3, name: "Lê Văn C", age: 22, address: "Đà Nẵng" }
      ]
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>DANH SÁCH SINH VIÊN</h2>

        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {this.state.students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentInfoComponent;
