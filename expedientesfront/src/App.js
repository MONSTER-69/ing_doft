import "./App.css";
import React from "react";
import CompFormularioRegistro from "./FormularioRegistro"; // Importa el formulario
import EditFormularioRegistro from "./EditFormularioRegistro"; // Importa el formulario
import Home from "./homePage_terapeuta";
import { BrowserRouter, Route , Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/FormularioRegistro" element={ <CompFormularioRegistro/> } />
            {/* <Route path="/edit/:exp_num" element={ <EditFormularioRegistro/> } />  */} 
        </Routes>
      </BrowserRouter>
  )
    
}

export default App;
