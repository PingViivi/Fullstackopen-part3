import React from 'react'

const Person = (props) => {
  const person = props.person
  return (
    <>
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={()=>props.delete(person.id)}>
            Delete
          </button>
        </div>
    </>
  )
}

export default Person