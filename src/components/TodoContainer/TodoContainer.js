import React from "react";
import Header from "../Header/Header.js";
import Practice from "../Practice/Practice.js";
import TodoCount from "../TodoCount/TodoCount.js";
import TodoList from "../TodoList/TodoList.js";
import InputTodo from "../InputTodo/InputTodo.js";
import { v4 as uuidv4 } from "uuid";
import "./TodoContainer.css";
import AlertButton from "../Practice/AlertButton.js";
import { Route, Switch } from "react-router-dom";
import About from "../../pages/About.js";
import NotMatch from "../../pages/NotMatch.js";
import Navbar from "../Navbar/Navbar.js";
import Contact from "../../pages/Contact.js";


class TodoContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: []
    };
  }


  handleChange = (id) => {
    console.log('checkbox clicked:', id);

    //Wichtig: State niemals direkt ändern:
    //this.state.todos = []; // SO NICHT

    //Funktion zum Ändern des states
    //erwartet ein Object als Parameter

    //Schreibweise ohne Ternären Operator
    this.setState({
      todos: this.state.todos.map(todoObj => {
        if (todoObj.id === id) {
          return {
            ...todoObj,
            completed: !todoObj.completed
          }
        }
        return todoObj;

      }) // END of map
    });

    // Schreibweise mit Ternären Operator

    // this.setState({
    //   todos: this.state.todos.map( todoObj =>{
    //     return {
    //       ...todoObj,

    //       // invertiere completed (false wird true und true wird false)
    //       // wenn die ID des todoObj der id entspricht, die dem Handler (handleChange)
    //       // übergeben wurde
    //       completed: todoObj.id === id ? !todoObj.completed : todoObj.completed
    //     }
    //   })
    // });


    //❗Todo❗ in Zukunft: setState updater bzw callback benutzen
    // Warum? Siehe unten bei Erklärungen
  }

  addTodo = (title) => {
    console.log(title);

    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [newTodo, ...this.state.todos]
    });

    // [...this.state.todos, newTodo]
    // kopiert sozusagen unser todosArray und fügt
    // unserer newTodo als erstes Element hinzu
  }

  delTodo = (id) => {

    // hier speichern wir das state-obj
    // in einer Variable

    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({ todos: newTodos });

    // Todo Zukunft: Hier eigentlich wieder besser: callback 
    // function als Parameter für setState
  }
  componentDidMount() {
    // Erklärung siehe unten
    console.log("%c ComponentDidMount aus TodoContainer ausgeführt", "background: #bada55")

    // Daten aus localStorage laden
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) { // loadedTodos ist nicht leer
      this.setState({
        todos: loadedTodos
      })
    }


  }

  componentDidUpdate(previousProps, previousState) {
    // Erklärung zu componentDidUpdate siehe unten
    console.log("%c componentDidUpdate aus TodoContainer asugeführt", "background: #bada55")

    // arrays können nicht direkt miteinander verglichen werden
    // => if(previousState.todos !== this.state.todos) wäre IMMER true
    // Stattdessen: Arrays ins String umwandeln 
    if (JSON.stringify(previousState.todos) !== JSON.stringify(this.state.todos)) {
      // Hier ist es sinnvoll, die neuen Daten/State in einer Datenbank zu speichern
      // in unserem Fall in localStorage
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }

  }

  render() {

    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo
                  addTodoProp={this.addTodo}
                />
                <TodoList
                  todosProp={this.state.todos}
                  handleChangeProp={this.handleChange}
                  delTodoProp={this.delTodo}
                />
                <TodoCount todosProp={this.state.todos} />
                {/* <Practice /> */}

              </div>
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </>
    );
  }

}


export default TodoContainer;

// ToDo Container umwandeln in Functional Component unter Verwendung
// von useEffekt-Hook: siehe https://ibaslogic.com/react-hooks-tutorial/#using-the-react-hooks-usestate 

//********************
// *** Erklärungen ***
//********************

// *** Ternärer Operator: ? : ***
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// let completed = todoObj.id === id ? !todoObj.completed : todoObj.completed

// Obere Zeile ist gleichbedeutend mit folgendem Code

// let completed = null;
// if( todoObj.id === id ) {
//   completed =!todoObj.completed
// } else {
//   completed = todoObj.completed;
// }


// *** ComponentDidMount ***
// componentDidMount() {...}
  // wird aufgerufen, wenn die Component "gemountet", 
  // also zum DOM hinzugefügt wurde

  // Wozu verwenden: Netzwerkanfragen/Daten laden: 
  // z.B mit fetch:

  // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //   .then( response => {return response.json()} )
  //   .then( data => {
  //     //Todos aus jsonplaceholder unseres Todos hinzufügen
  //     this.setState( {todos: [...data]} );
  //   })

// *** ComponentDidUpdate ***
// componentDidUpdate(previousProps, previousState) {... }

// componentDidUpdate wird ausgeführt, wenn die Komponente und 
// somit das DOM geändert wurde
// previousProps enthält die vorherigen Props,also vor dem Update (hier: leer)
// previousState enthält den vorherigen State,also vor dem Update


// Wichtig: Am besten vergleicht man stets den ursprünglichen State mit dem neuen State,
// damit man potenzielle Endless-Loops vermeidet. Vor allem wird das wichtig
// wenn man setState in ComponentDidUpdate verwendet

// *** React Router ***
/*
<Route path="/">
URL muss mit dem path (hier also "/") ANFANGEN, damit es einen
MAtch gibt
<Route path="/" exact> Die Route muss EXAKT dem Path entsprechen

* Route OHNE Switch*

<Route path="/" exact>...</Route>
<Route path="/about">...</Route>
<Route path="/contact">...</Route>

Als Pseudocode:

if(path === "/") {
  render(IndexPage) // "quasi index Seite"
}
if(path === "/about") {
  render(AboutPage)
}
if(path === "/contact") {
  render(ContactPage)
}

* Route MIT Switch*

<Switch>
  <Route path="/" exact>...</Route>
  <Route path="/about">...</Route>
  <Route path="/contact">...</Route>
</Switch>

if(path === "/") {
  render(IndexPage) // "quasi index Seite"
}
else if(path === "/about") {
  render(AboutPage)
}
else if(path === "/contact") {
  render(ContactPage)
}

*/