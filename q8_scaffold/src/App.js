import "./styles.css";
import List from "./List";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Component } from "react";
import { courses } from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { bagItems: [] };
  }

  isCourseinBag = (id) => {
    return !!this.state.bagItems.find((c) => c.id === id);
  };

  handleAddToBag = (id) => {
    const course = courses.find((c) => c.id === id);
    this.setState((prevState) => ({
      bagItems: [course, ...prevState.bagItems]
    }));
  };

  handleRemoveFromBag = (id) => {
    const filteredCourses = this.state.bagItems.filter((c) => c.id !== id);
    this.setState({ bagItems: filteredCourses });
  };

  render() {
    return (
      <div className="App">
        <Navbar itemCount={this.state.bagItems.length}/>
        <h3>CodeTube Catalog</h3>
        <div className="container">
          <List handleAddToBag={this.handleAddToBag} handleRemoveFromBag={this.handleRemoveFromBag} isCourseinBag={this.isCourseinBag} />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;