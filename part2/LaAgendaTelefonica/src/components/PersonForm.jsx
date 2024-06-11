import React from 'react'

const PersonForm = ({onSubmit, funcionEnCambioName, valueName, funcionEnCambioNumber, valueNumber}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          name: <input 
          onChange={funcionEnCambioName}  
          value={valueName}
        />
        <br/>
          number: <input
          value={valueNumber}
          onChange={funcionEnCambioNumber}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

    </div>
  )
}

export default PersonForm