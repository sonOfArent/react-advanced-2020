import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  if (action.type === "TESTING") {
    return {
      ...state, 
      people: data, 
      isModalOpen: true, 
      modalContent: "Item added"
    }
  }
  
  return state
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = event => {
    event.preventDefault()
    if (name) {
      dispatch({type:'TESTING'})
    } else {
    }

    setName('')
  }

  return (
    <div>
      { state.isModalOpen && <Modal modalContent={state.modalContent} /> }
      <form onSubmit={handleSubmit} className="form" >
        <div>
          <input
            type="text" 
            value={name} 
            onChange={event => setName(event.target.value)}
            />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map(person => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Index;

