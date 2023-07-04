import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.trim() === "") {
      return;
    }
    this.props.handleAdd({ text: this.state.text });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form">
          <input
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Whats on your mind?"
            required
          />
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}
