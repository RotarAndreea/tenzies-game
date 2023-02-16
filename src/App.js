import React from 'react';
import './App.css';
import Die from './Die';

function App() {
  const [value,setValue]=React.useState(allNewDice)
  
  function allNewDice(){
    const array=[]
    var i=11
    while(i)
    {
      array.push(Math.floor(Math.random() * 7 + 1))
      i--
    }
    return array
  }

  return (
    <main>
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
          <div className='dice-container'>
              <Die value={value[1]}/>
              <Die value={value[2]}/>
              <Die value={value[3]}/>
              <Die value={value[4]}/>
              <Die value={value[5]}/>
              <Die value={value[6]}/>
              <Die value={value[7]}/>
              <Die value={value[8]}/>
              <Die value={value[9]}/>
              <Die value={value[10]}/>
          </div>
    </main>
  );
}
 
export default App;
