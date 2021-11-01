import React, { useState } from "react";

function Practice() {

  const [someText, setSomeText] = useState("Hallo Reacter!");
  const [names, setNames] = useState(["Manuel", "Christian", "Alina"]);
  
  const [text, setText] = useState("Ich bin ein State als Hook!");

  //Alternative: ein state mit Object
  const [state, setState] = useState({
    title: "",
    text: "Ich bin ein 'Object-State' als Hook!"
  });



  const handleWordChange = () => {
    setSomeText("Hallo Welt!");
  }

  const nameChanger = () => {

    const newNamesArray = names.map(name => {
      return `Hello ${name}`
    })
    setNames(newNamesArray);
  }


  return (
    <div className="nur-zum-lernen" style={{ marginTop: "20px" }}>
      <h3>Nur zum üben</h3>
      <p>{someText}</p>
      <button
        onClick={handleWordChange}
      >
        Ändere oberen Text
      </button>
      <ul>
        {names.map((name, i) => {
          return <li key={i}>{name}</li>
        })}
        {/* { [<li>Manuel</li>, <li>Christian</li>, <li>Alina</li>] } */}
      </ul>
      <button
        onClick={nameChanger}
      >
        Hello!
      </button>
      <br />
      <hr />
      <br />
      <span
        onClick={() => { setText('Ich wurde angeklickt 👽') }}
      >
        {text}
      </span>
      <span
        onClick={() => {
          setState({
            ...state, //destructering notwendig bei useState, da nicht automatisch gemerged wird
            text: 'ich wurde angeklickt'
          })
        }}
      >
        {state.text}
      </span>
    </div>
  );
}

class PracticeClass extends React.Component {

  constructor() {
    super();

    this.state = {
      someText: "Hallo Reacter!",
      names: ["Manuel", "Christian", "Alina"]
    }
  }

  handleWordChange = () => {
    this.setState({
      someText: "Hallo Welt!"
    });
  }

  nameChanger = () => {
    this.setState({
      names: this.state.names.map(name => {
        return `Hello ${name}`
      })
    });

    // ToDo in Zukunft: Eigentlich auch hier Callback benutzen
  }

  render() {
    return (
      <div className="nur-zum-lernen">
        <h3>Nur zum üben</h3>
        <p>{this.state.someText}</p>
        <button
          onClick={this.handleWordChange}
        >
          Ändere oberen Text
        </button>
        <ul>
          {this.state.names.map((name, i) => {
            return <li key={i}>{name}</li>
          })}
          {/* { [<li>Manuel</li>, <li>Christian</li>, <li>Alina</li>] } */}
        </ul>
        <button
          onClick={this.nameChanger}
        >
          Hello!
        </button>
      </div>
    );
  }
}

export default Practice;

/*
Hinweis:

Wir benutzen in der render Funktion wieder map. DAher brauchen wir
einen key. In diesem Fall benutzen wir den index als key. Das ist
eigentlich keine gute Praxis, wenn wir z.B. die Namen löschen
und erweitern würden. In diesem Fall würde sich der INdex nämlich ändern
und plötzlich hätte vielleicht ein Element eine andere ID.
Mehr dazu: https://programmingwithmosh.com/react/why-do-i-need-keys-in-react-lists/

In unserem Fall hier ist es aber ok

*/