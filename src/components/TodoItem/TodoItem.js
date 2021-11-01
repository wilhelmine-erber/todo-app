import {Component} from "react";
import { FaTrash } from "react-icons/fa"
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  // Alternative zum ternären Operator hinsichtlich completedStyle
  // siehe unten

  const handleEdit = () => {
    console.log('edit mode activated');
    // In Zukunft (optional): implementieren
    // Tutorial: https://ibaslogic.com/how-to-edit-todos-items-in-react/

  };

  return (
    <li className={styles.item}>
      <input
        className={styles.checkbox}
        type="checkbox" 
        checked ={props.completed}
        onChange={ ()=>{props.handleChangeProp(props.id)} }
      />
      <div style={{display:"inline-block"}} onDoubleClick={handleEdit}>
        <span style={props.completed ? completedStyle : null}>
          {props.children}
        </span>
        {/* Hier später Input Element hinzufügen (für edit Funktion) */}
      </div>  
      
      <button
        onClick={ () => {props.delTodoProp(props.id)} }
      >
        <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
      </button>
    </li>
  )
};


// nachfolgend: Componente als class, um componentWillUnmount()
// zu zeigen
class TodoItemWithLifecycleMethods extends Component {


  // Alternative zum ternären Operator hinsichtlich completedStyle
  // siehe unten

  handleEdit = () => {
    console.log('edit mode activated');
    // In Zukunft (optional): implementieren
    // Tutorial: https://ibaslogic.com/how-to-edit-todos-items-in-react/

  }

  componentDidMount() {
    // Hier z.B. setIntervall starten

  }

  componentWillUnmount() {
    // wird ausgeführt, before die Komponente entfernt wird
    alert('TodoItem wird nun entfernt');
    // Um "Aufräumarbeiten" durchzuführen
    // z.B. setIntervall anzubrechen
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    return (
      <li className={styles.item}>
        <input
          className={styles.checkbox}
          type="checkbox" 
          checked ={this.props.completed}
          onChange={ ()=>{this.props.handleChangeProp(this.props.id)} }
        />
        <div style={{display:"inline-block"}} onDoubleClick={this.handleEdit}>
          <span style={this.props.completed ? completedStyle : null}>
            {this.props.children}
          </span>
          {/* Hier später Input Element hinzufügen (für edit Funktion) */}
        </div>  
        
        <button
          onClick={ () => {this.props.delTodoProp(this.props.id)} }
        >
          Delete
        </button>
      </li>
    )
  }
};



export default TodoItem;
// export default TodoItemWithLifecycleMethods

// props.children:
// gibt aus, was zwischen dem
// öffnenden <TodoItem> und 
// schließenden </TodoItem> Tags steht



  // Alternative zum ternären Operator hinsichtlich completedStyle

  // let todoTextStyle = null;
  // if(props.completed) {
  //   todoTextStyle = completedStyle;
  // }
  // Entsprechend in span style "todoTextStyle" benutzen