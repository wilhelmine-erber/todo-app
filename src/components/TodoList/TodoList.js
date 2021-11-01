//Aufgabe: Erstelle Component, die <p>Ich bin die TodoListe</p> ausgibt
// fügt sie TodoContainer hinzu und rendert sie dort
import React from "react";
import TodoItem from "../TodoItem/TodoItem.js";

// Prop in functional component
// const TodoList = (props) => {

//   console.log(props)
// }; 

class TodoList extends React.Component {

  render() {
    console.log(this.props);

    // this.props.todos: Zugriff auf die
    // prop "todos" => Zugriff auf todo-state bzw.-todo Array

    //unique key/einmaliger key: Hilft sozusagen react
    // effizienter zu arbeiten
    return (
      <ul>
        {this.props.todosProp.map(todo => {
          //console.log('todo.title in this.props.todosProp.map:', todo.title);
          return (
            <TodoItem 
              key={todo.id} 
              id={todo.id}
              completed={todo.completed}
              handleChangeProp={this.props.handleChangeProp}
              delTodoProp={this.props.delTodoProp}
            >
              {todo.title/* wird als prop.children übergeben */} 
            </TodoItem>
          );
        })}
      </ul>
    )
  }
}

export default TodoList;


// ERKLÄRUNGEN
//todo parameter in map (this.props.todosProp.map(todo...)
// beinhaltet immer das aktuelle todo-Object. Z.B:
// {
//   id: 1,
//   title: "React lernen",
//   completed: true
// }


// Object in constante
// let todo = {
//   id: 1,
//   title: "React lernen",
//   completed: true
// }
// alert( todo.completed );


