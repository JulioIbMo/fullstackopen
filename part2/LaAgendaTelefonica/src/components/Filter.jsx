import React from 'react'

const Filter = ({funcionFiltradora, filter}) => {

  return (
    <div>
      filter shown with: 
      <input
      onChange={funcionFiltradora}  
      value={filter}
    />
    </div>
  )
}

export default Filter