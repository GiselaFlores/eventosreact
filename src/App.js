import logo from './logo.svg';
import './App.css';

const profesiones = ["médico", "abogado", "contador", "develop", "docente", "otro"];

function App() {

  const cambioDeProfesion = (e) =>{
    console.log(e.target.value);
  }

  const informarDescuento = (e) =>{
    console.log(e.target.value);
    alert("su descuento es del 100%");

  }

  return (
    <div>
    <h1 className='m-auto mb-3 mt-3 text-center' >Selecione una profesión:</h1>
    
    <select onChange={cambioDeProfesion} className="form-select form-select-lg mb-3 m-auto w-50" aria-label=".form-select-lg example" name="profesiones">
      
     {profesiones.map((profesion, idx) => (<option key={idx} value={profesion}>{profesion} </option>))}

    </select>

    <button onClick={informarDescuento} type="button" className="d-grid gap-2 col-6 mx-auto btn btn-primary mt-5 text-center ">Obtener descuento</button>

    </div>
  );
}

export default App;
