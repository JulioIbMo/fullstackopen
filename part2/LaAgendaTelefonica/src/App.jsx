import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import nameService from './services/names.js'
import Notification from './components/Notification.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'154225' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const[mensajeExito, setMensajeExito] = useState('')
  const[mensajeError, setMensajeError] = useState('')

useEffect(() => {
  nameService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
},[])

  const funcionEnCambioName = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
    console.log("Esto es lo que se captura del input =>",event.target.value)
  }

  const funcionEnCambioNumber = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }


  const anadirNombre = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const personaExistente=persons.find(person => person.name === newName)
    if(personaExistente){
      nameService
        .update(personaExistente.id, nameObject)
        .then(response => {
          setPersons(persons.map(person => person.id !== personaExistente.id ? person : response.data))
            setNewName('')
            setNewNumber('')
        })
        .catch(error =>{
          setMensajeError(
            `${newName} fue removido`
          )
          setTimeout(() => {
            setMensajeError(null)
          }, 5000)
        }
        )
    }
    nameService
      .create(nameObject)
      .then(response =>{
        if(persons.some(person => person.name === newName)) {
              alert(`${newName} ya fue agregado al phoneBook`);
            } else {
              setPersons(persons.concat(nameObject))
            }
            setNewName('')
            setNewNumber('')
      })
    
    setMensajeExito(
      `${newName} fue agregado exitosamente`
    )
    setTimeout(() => {
      setMensajeExito(null)
    }, 5000)
  }

  const funcionFiltradora = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())); // Si no, filtra las personas

  const funcionEliminarAxios = (id,name) => {
    console.log(persons.id)
    const confirmarEliminar = window.confirm(`¿Estás seguro de que deseas eliminar a ${name}?`);
    if (confirmarEliminar){
     nameService.borrar(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
      }); 
    }
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      {mensajeError && <Notification message={mensajeError} classCss={'error'} />} 
      {mensajeExito && <Notification message={mensajeExito} classCss={'exito'} />}

      <Filter funcionFiltradora={funcionFiltradora} filter={filter} />

      
      <h2>Add a New</h2>
      <PersonForm 
      onSubmit={anadirNombre} 
      funcionEnCambioName={funcionEnCambioName}
      funcionEnCambioNumber={funcionEnCambioNumber}
      valueName={newName}
      valueNumber={newNumber}
      
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} funcionEliminarAxios={funcionEliminarAxios}/>
      

    </div>
  )
}

export default App