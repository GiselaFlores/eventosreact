import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import FormNombre from './formNombre';

const profesiones = ["médico", "abogado", "contador", "develop", "docente", "otro"];

function App() {

  const [profesion, setProfesiones]= useState(profesiones);

  useEffect(() =>{
    console.log(profesiones);
  }, [profesiones]);

  const cambioProfesion = (e)=>{
    console.log(e.target.value);
  }

  const informarDescuento = (e) =>{
    switch (profesion) {
      case 'médico':
        alert('Tu descuento es del 5%')
        break;
      case 'abogado':
        alert('Tu descuento es del 10%')
        break;
      case 'contador':  
        alert('Tu descuento es del 15%')  
        break;
      case 'develop':
        alert('Tu descuento es del 20%')
        break;
      case 'docente':
        alert('Tu descuento es del 25%')
        break;
      default:
        alert('Vos no tenés descuento...')
        break
    }
  }

  return (
    <div>
      <h1 className="m-auto mb-3 mt-3 text-center" >Selecione una profesion:</h1>

      <select onChange={cambioProfesion} className="form-select form-select-lg mb-3 m-auto w-50"  aria-label=".form-select-lg example" name="profesiones">
        {profesiones.map((profesion, idx)=>(<option key={idx} value={profesion} >{profesion} </option>))}
      </select>

      <button onClick={informarDescuento}className="d-grid gap-2 col-6 mx-auto btn btn-primary mt-5 text-center">Obtener Descuento</button>

      <div className="App container">
        <div className='row'>
          <FormNombre setProfesiones={setProfesiones} profesiones={profesiones} />
        </div>
      </div>
    </div>
  );
}

export default App;
