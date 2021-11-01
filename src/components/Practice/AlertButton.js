import React from "react";

// Übersicht Class und Functional Component

class AlertButton extends React.Component {

  // wenn wir einen state haben, können wir das im constructor() realiseren

  clickHandler = () => {
    alert(this.props.msg);
    console.log(this.props.msg);
  }

  render() {
    const buttonStyle = {
      backgroundColor: "red",
      color: "white",
      borderRadius: "15px",
      padding:"10px"
    };
    return (
      <button
        style={buttonStyle}
        onClick={this.clickHandler}
      >
        {this.props.children}
      </button>
    );
  }

}

// Realisiere obere Component als functional component

const AlertButtonFunc = (props) => {

  const clickHandler = () => {
    alert(props.msg);
    console.log(props.msg);
  };

  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    borderRadius: "15px",
    padding:"10px"
  };

  return (
    <button
      style={buttonStyle}
      onClick={clickHandler}
    >
      {props.children}
    </button>
  );
}

export default AlertButton;
// export default AlertButtonFunc;

