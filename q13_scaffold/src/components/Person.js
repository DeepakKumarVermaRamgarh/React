import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  render() {
    const handleRemovePerson = (email) => {
      alert(`A person with email ${email} was removed from your network!`)
      this.props.handleRemove(this.props.index);
    }

    const { img, email } = this.props.person;
    return (
      <div className="person">
        <b onClick={() => handleRemovePerson(email)} >X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
