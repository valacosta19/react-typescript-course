import React, { useReducer } from 'react'

const initialState = {
  counter: 0,
}

type ActionType = 
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'custom', payload: number };

const counterReducer = ( state: typeof initialState, action: ActionType ) => {

  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        counter: state.counter + 1
      }

    case 'decrementar':
      return {
        ...state,
        counter: state.counter - 1
      }

    case 'custom':
      return {
        ...state,
        counter: action.payload
      }
    default:
      return state;
  }

}

export const CounterRed = () => {

  const [stateCounter, dispatch] = useReducer(counterReducer, initialState)

  return (
    <>
      <h2>Contador: { stateCounter.counter }</h2>
      <button 
        onClick={ () => dispatch({ type: 'incrementar' }) }
        className='btn btn-outline-primary'>
        +1
      </button>
      <button 
        onClick={ () => dispatch({ type: 'decrementar' }) }
        className='btn btn-outline-primary'>
        -1
      </button>
      <button 
        onClick={ () => dispatch({ type: 'custom', payload: 100 }) }
        className='btn btn-outline-danger'>
        100
      </button>
    </>
  )
}
