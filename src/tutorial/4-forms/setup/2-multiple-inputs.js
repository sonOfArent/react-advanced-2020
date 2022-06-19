import React, { useState, useEffect } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  // const [firstName, setFirstName] = useState('')
  // const [email, setEmail] = useState('')
  // const [age, setAge] = useState('')
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: ''
  })

  const [people, setPeople] = useState([])
  const [isError, setIsError] = useState(false)

  const handleChange = event => {
    // They are the values from which the event is sent, so I can have several different inputs using the same function.

    let name = event.target.name
    let value = event.target.value

    // Putting name in brackets makes it dynamically typed, which allows us to subsitute our name variable for the person object's property with the same key.
    setPerson({...person, [name]:value})
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (person.firstName && person.email && person.age) {
      let newPerson = {
        ...person,
        id: new Date().getTime().toString()
      }
      setPeople([...people, newPerson])
    } else {
      setIsError(true)
    }

    setPerson({
      firstName: '',
      email: '',
      age: ''
    })

  }


  useEffect(() => {
    setIsError(false)
  }, [people])
  

  return (
    <div>
      <article>
        <form className='form' >
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text" 
              name="firstName" 
              id="firstName" 
              value={person.firstName} 
              onChange={handleChange} 
              />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input 
              type="text" 
              name="email" 
              id="email" 
              value={person.email} 
              onChange={handleChange} 
              />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age: </label>
            <input 
              type="text" 
              name="age" 
              id="age" 
              value={person.age} 
              onChange={handleChange} 
              />
          </div>
          {isError && <p>Please fill out all fields!</p>}
          <button type="submit" onClick={handleSubmit} >Add Person</button>
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
