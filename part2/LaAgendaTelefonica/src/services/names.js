import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = nameObject => {
  return axios.post(baseUrl, nameObject)
}

const update = (id, nameObject) => {
  return axios.put(`${baseUrl}/${id}`, nameObject)
}

const borrar = id =>{
  return axios.delete(`http://localhost:3001/persons/${id}`)
}

export default { 
  getAll, 
  create, 
  update,
  borrar
}