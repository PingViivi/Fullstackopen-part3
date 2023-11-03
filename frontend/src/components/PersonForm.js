import React from 'react'

const PersonForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <label>
            name: 
            <input 
                value={props.newName}
                onChange={props.handleNameChange}
            />
            </label>
        <label>
            number: 
            <input 
                value={props.newNumber}
                onChange={props.handleNumberChange}
            />
        </label>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
  )
}

export default PersonForm