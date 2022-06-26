// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

let newVal = "";

function App() {

  
  const [val, setVal] = useState("0");

  const showText = (event, text) => {
    newVal += text;
    setVal(newVal);
  };

  const clearText = (event) => {
    newVal="";
    setVal("0");
  }

  
  const handleOnChange = (event)=>{
    setVal(event.target.value);
  }

  const getResult = () => {
    // eslint-disable-next-line no-eval
    var result = eval(newVal);
    newVal="";
    setVal(result);
  }


  return (
    <>
    <div className="container-fluid">
      <div className="calc-border mx-auto">
        <textarea className='form-control calc-input' onChange={handleOnChange} value={val} contenteditable></textarea>
        <table className='tbl'>
          <tbody>
            <tr>
              <td><button type="button" onClick={event => clearText(event)} className='raise'>C</button></td>
              <td><button type="button" onClick={event => showText(event, '(')} className='raise'>(</button></td>
              <td><button type="button" onClick={event => showText(event, ')')} className='raise'>)</button></td>
              <td><button type="button" onClick={event => showText(event, '/')} className='raise'>/</button></td>
            </tr>
            <tr>
              <td><button type="button"  onClick={event => showText(event, '7')} className='raise'>7</button></td>
              <td><button type="button" onClick={event => showText(event, '8')} className='raise'>8</button></td>
              <td><button type="button" onClick={event => showText(event, '9')} className='raise'>9</button></td>
              <td><button type="button" onClick={event => showText(event, '*')} className='raise'>x</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={event => showText(event, '4')} className='raise'>4</button></td>
              <td><button type="button" onClick={event => showText(event, '5')} className='raise'>5</button></td>
              <td><button type="button" onClick={event => showText(event, '6')} className='raise'>6</button></td>
              <td><button type="button" onClick={event => showText(event, '-')} className='raise'>-</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={event => showText(event, '1')} className='raise'>1</button></td>
              <td><button type="button" onClick={event => showText(event, '2')} className='raise'>2</button></td>
              <td><button type="button" onClick={event => showText(event, '3')} className='raise'>3</button></td>
              <td><button type="button" onClick={event => showText(event, '+')} className='raise'>+</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={event => showText(event, '%')} className='raise'>%</button></td>
              <td><button type="button" onClick={event => showText(event, '0')} className='raise'>0</button></td>
              <td><button type="button" onClick={event => showText(event, '.')} className='raise'>.</button></td>
              <td><button type="button" onClick={event => getResult(event)} className='raise'>=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default App;
