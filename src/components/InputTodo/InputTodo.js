import React, { Component, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

import "./InputTodo.css";


// als functional component
function InputTodo(props) {

  // 1. Variable title => beinhaltet state 
  // 2. Variable setTitle => beinhaltet function zum Ändern des States
  const [title, setTitle] = useState(""); // setzt initial state title auf ""
  // quasi gleichbedeutend mit
  // const title = useState("")[0];
  // const setState = useState("")[1];

  const onChangeHandler = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // vermeide Abschicken des Formulars

    console.log(title);

    if (title.trim() !== "") { //Title ist nicht leer
      props.addTodoProp(title.trim());

      // Input Feld leeren
      setTitle("");

    } else {
      alert('Bitte Item reinschreiben!')
    }

  }


  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form-container"
      >
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={title}
          onChange={onChangeHandler}
          className="input-text"
        />
        <button className="input-submit">
          <FaPlusCircle color="darkcyan" size="20px"  />
        </button>

      </form>
    </>
  )

}



// Class Component mit ES6 syntx (also mit constructor)
class InputTodoClass extends Component {

  constructor() {
    super();

    this.state = {
      title: ""
    }
  }
  onChangeHandler = (e) => {
    // [e.target.name] : dynamische Vergabe der Eigenschaft
    // eines Objects
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault(); // vermeide Abschicken des Formulars
    // console.log(this.state.title);

    if (this.state.title.trim() !== "") { //Title ist nicht leer
      this.props.addTodoProp(this.state.title.trim());

      // Input Feld leeren
      this.setState({
        title: ""
      });

    } else {
      alert('Bitte Item reinschreiben!')
    }

    // trim entfernt Whitespace (z.B. Leerzeichen) am Anfang
    // und am Ende eines Strings und gibt diesen zurück
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form-container"
      >
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChangeHandler}
          className="input-text"
        />
        <button className="input-submit">Add +</button>
      </form>
    )
  }
}
export default InputTodo;

// Exkurs: ES7 Syntax (wie im Tutorial)

class InputTodoEs7 extends Component {

  state = {
    title: ""
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo..." />
        <button>Submit</button>
        Zugriff erfolgt auch mit this: {this.state.title}
      </form>
    )
  }
}
