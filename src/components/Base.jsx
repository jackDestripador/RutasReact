import React, {useState,useEffect} from 'react';

const Base = () => {
  const [nombre,setNombre] =useState('Pedro')
  useEffect(() => {
    setTimeout(() => {
      setNombre('Jesús');
    },2000)
    
  })
  return (
    <div>
      <h1>Pagina de Base Rutas/ </h1>
      {nombre}
    </div>
    );
}
 
export default Base;
<div>
  <h1>Pagina de Base Rutas/ </h1>
</div>