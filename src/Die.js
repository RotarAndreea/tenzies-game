import React from 'react'
import './App.css';


const Die = (props) => {
    
    const styles={
        backgroundColor: props.isHeld ? '#39825a' : '#f4e4e4'
    }

  return (
    <div className='hi'>
        <div className='box' style={styles}
             onClick={props.holdDice}
        >
                {props.value}
    
        </div>
    </div>
    
  )
}

export default Die