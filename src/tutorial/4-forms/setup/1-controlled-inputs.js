import React, { useState, useEffect } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  const [isError, setIsError] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    
    if (firstName && email) {
      let newPerson = { id: new Date().getTime().toString(), firstName, email }
      setPeople([...people, newPerson])
      console.log(newPerson)
    }
    else {
      setIsError(true)
    }

    setFirstName('')
    setEmail('')
  }

  useEffect(() => {
    setIsError(false)
  }, [people])
  

  return (
    <div>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text" 
              name="firstName" 
              id="firstName" 
              value={firstName} 
              onChange={event => setFirstName(event.target.value)} 
              />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input 
              type="text" 
              name="email" 
              id="email" 
              value={email} 
              onChange={event => setEmail(event.target.value)} 
              />
          </div>
          {isError && <p>Please fill out all fields!</p>}
          <button type="submit">Add Person</button>
        </form>
      </article>
      {
        people.map(person => {
          const { id, firstName, email } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })
      }
    </div>
  )
};

export default ControlledInputs;
