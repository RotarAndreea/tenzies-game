import React from 'react';
import './App.css';
import Die from './Die';

function App() {
  const [dice,setDice]=React.useState(allNewDice())
  
  const diceValue=dice.map(die=>
      <Die
          value={die}
      />
    )

  function allNewDice(){
    const array=[]
    var i=10
    while(i)
    {
      array.push(Math.floor(Math.random() * 7 + 1))
      i--
      
    }
    return array
  }

  function rollDice(){
    setDice(allNewDice)
  }

  return (
    <main>
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
          <div className='dice-container'>
              {diceValue}
          </div>
          <button 
                className='roll-button'
                onClick={rollDice}
          >
              Roll
          </button>
    </main>
  );
}
 
export default App;
