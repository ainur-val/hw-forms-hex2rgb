import React from 'react'
import { useState } from 'react'
import './App.css'

let resultRgb;

class App extends React.Component {
     constructor(props) {
    super(props);
      this.state = {
      value: '',       
      bodyColor: '',
    };
    this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
    this.setState({value: event.target.value});
    if (event.target.value.length === 7) {
      let Reg_Exp = /^#[0-9A-F]{6}$/i;
      if (Reg_Exp.test(event.target.value)) {
      let r = parseInt(event.target.value.slice(1, 3), 16);  
      let g = parseInt(event.target.value.slice(3, 5), 16);  
      let b = parseInt(event.target.value.slice(5, 7), 16);  
      resultRgb = `rgb(${r}, ${g}, ${b})`
      document.body.style.backgroundColor = resultRgb;
      this.setState({bodyColor: resultRgb});
      
      } else {
        resultRgb = "Ошибка!";
        document.body.style.backgroundColor = "white";
      }
    } else if (event.target.value.length > 7) {
        resultRgb = "Ошибка!";
        document.body.style.backgroundColor = "white";
      } else if (event.target.value.length < 7) {
        resultRgb = "";
        document.body.style.backgroundColor = "white";
      }
  }
  
  render() {
    return (
      <form>
        <label>
          <input className="divInput" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <div className="divColor">{resultRgb}</div>
        </form>
    );
  }
}

export default App
