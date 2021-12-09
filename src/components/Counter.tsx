import React, { useState } from 'react'

export const Counter = () => {

  const [counter, setCounter] = useState(0)

  // increment envia un evento, no un numero
  const increment = ( number: number = 1 ):void => { //void aca es el tipado de la function, lo que retorna
    setCounter(counter + number);
  }

  return (
    <div className='mt-5'>
      <h3>Counter</h3>
      <span>Valor: {counter}</span>
      <br />
      <button 
        onClick={() => increment()}
        className='btn btn-outline-primary mt-2'>
        +1
      </button>
      
      <button 
        onClick={() => increment(2)}
        className='btn btn-outline-primary mt-2'>
        +2
      </button>
      
      <button 
        onClick={() => setCounter(0)}
        className='btn btn-outline-danger mt-2'>
        Reset
      </button>
    </div>
  )
}
