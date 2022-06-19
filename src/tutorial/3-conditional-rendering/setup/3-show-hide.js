import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button className='btn' onClick={() => setShow(!show)}>Show/Hide</button>
      <br />
      <br />
      {show && <Item />}
    </div>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [size])
  

  return (
    <div>
      <h1>window</h1>
      <h2>size: {size}</h2>
    </div>
  )
}

export default ShowHide
