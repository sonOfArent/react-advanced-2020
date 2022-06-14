import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  return (
    <div>
      {people.map(person => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
          )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear Items
      </button>
    </div>
  )
}

export default UseStateArray;
