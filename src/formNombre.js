import React, { useEffect } from 'react'

export default function FormNombre({setProfesiones, profesiones}) {

  const agregarNombre = (e) => {
    e.preventDefault();
    let aux = profesiones;
    aux.push(e.target[0].value);
    setProfesiones(aux);
  };

  return (
      <form className='col-6 m-auto mt-3' onSubmit={agregarNombre}>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Nombre Profesion</label>
        <input id="nombre" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  )
}
