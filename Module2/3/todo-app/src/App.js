import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Khởi tạo state
    this.state = {
      list: [],
      item: ""
    };
  }

  // Hàm xử lý khi nhập dữ liệu
  handleChange = (event) => {
    this.setState({
      item: event.target.value
    });
  };

  // Hàm thêm công việc vào danh sách
  handleAddItem = () => {
    if (this.state.item !== "") {
      this.setState({
        list: [...this.state.list, this.state.item],
        item: ""
      });
    }
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>TODO APP</h2>

        {/* Textfield */}
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
          placeholder="Nhập công việc"
        />

        {/* Button Add */}
        <button onClick={this.handleAddItem}>Add</button>

        {/* Danh sách todo */}
        <ul>
          {this.state.list.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
