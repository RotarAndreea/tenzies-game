import React from 'react';
import './App.css';
import Die from './Die';
import { nanoid } from 'nanoid';

function App(props) {
  const [dice,setDice]=React.useState(allNewDice() )
  
  const diceValue=dice.map(die=>
      <Die
          value={die.value}
          key={die.id}
          isHeld={die.isHeld}
          holdDice={()=>holdDice(die.id)}
      />
    )

  function allNewDice(){
    const newDice=[]
    var i=10
    while(i)
    {
      newDice.push({value:Math.floor(Math.random() * 7 + 1),
                   isHeld: false,
                   id:nanoid() 
      })
      i--
      
    }
    return newDice
  }

  function rollDice(){
    setDice(oldDice=>oldDice.map(die=>{
      return die.isHeld === true ? 
          {...die}
          :
          {
            ...die,
            value: Math.floor(Math.random() * 7 + 1),
          }
    }))
  }

  function holdDice(id){
    setDice(oldDice => oldDice.map(die =>{
      return  die.id === id ? 
        {
            ...die,
            isHeld: !die.isHeld
        }
        :
        {...die}
      
    }))    
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
