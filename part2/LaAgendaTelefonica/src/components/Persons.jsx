import React from 'react'

const Persons = ({persons,funcionEliminarAxios}) => {
  return (
    <div>
      {persons.map((person, index)=>(
        <p key={person.name}>{person.name} {person.number} <button onClick={()=>funcionEliminarAxios(person.id, person.name)} >delete</button></p>
        
      ) ) } 
    </div>
  )
}

export default Persons