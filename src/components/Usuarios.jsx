import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Usuarios = () => {
  const [usuario,setUsuario]= useState([])
  const obtenerUsuarios = async() => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = await res.data
    setUsuario(users)
  }
  useEffect(() => {
    obtenerUsuarios()
  },[])
  return (
    <div>
      <h2>Listado de Usuario</h2>
      {
        usuario.map((item) => (
          <div>
            <Link to={`/usuario/${item.id}`} key={item.id}>
              {item.name}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Usuarios

