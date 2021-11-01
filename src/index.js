import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/TodoContainer/TodoContainer.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
//const reactElement = <p>Hallo aus index.js!</p>; // intern: React.createElement('h1',...)

// Rendert unsere Components/React-Elemente im DOM
// hier wird es an das HTML Element #root hinzugefügt 
// (siehe public -> index.html -> <body>)
ReactDOM.render(

  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>, 
  document.getElementById('root') // Füge TodoContainer im DOM zum div mit ID "root" hinzu
);


// Erklärung

/*
<Router> // "aktiviert" sozusagen React Router
  <TodoContainer />
</Router>

Wir können nun Router in TodoContainer und all seinen Children
verwenden 

*/