import React from 'react'
import { useState } from 'react'
import './App.css'

let resultRgb;
let textRgb

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
      textRgb = `rgb(${r}, ${g}, ${b})`
      resultRgb = textRgb;
      this.setState({bodyColor: textRgb});
      
      } else {
        textRgb = "Ошибка!";
        resultRgb = "white";
      }
    } else if (event.target.value.length > 7) {
        textRgb = "Ошибка!";
        resultRgb = "white";
      } else if (event.target.value.length < 7) {
        textRgb = "";
        resultRgb = "white";
      }
  }
  
  render() {
    return (
      <div className='container' style={{ background: resultRgb }}>
      <form>
        <label>
          <input className="divInput" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <div className="divColor">{textRgb}</div>
        </form>
        </div>
    );
  }
}

export default App
