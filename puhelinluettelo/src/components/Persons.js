import React from 'react'
import Person from './Person'

const Persons = (props) => {
  return (
    <>
    {
        props.persons.map((person) => (
          <Person person={person} delete={props.handleDelete}/>
        ))
      }
    </>
  )
}

export default Persons