import React from "react";

import '../App.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CompFormularioRegistro from "../FormularioRegistro";


const URI = "http://localhost:3001/expedientes";

const TerapeutaView=()=>{

    // const [showForm, setShowForm ] = useState(false);
    const navigate = useNavigate();

    const handleNuevoRegistroClick= ()=>{
        // setShowForm(true);
        navigate("/FormularioRegistro")
    }

    return(

        <div className="page-container"> 
            <div className="sidebar"> 
                <div className="circle-button">Foto, perfil</div> 
                <div className="appointment-column"> 
                    <div>Lunes</div> <div className="appointment-slot">Slot 1</div> 
                    <div className="appointment-slot">Slot 2</div> 
                    <div className="appointment-slot">Slot 3</div> 
                    <div className="appointment-slot">Slot 4</div> 
                    <button className="full-schedule-button">Ver horario completo</button>
                </div> 
            </div> 
            <div className="main-content"> 
                    <div className="top-buttons">
                        <button onClick={handleNuevoRegistroClick}>Nuevo registro</button> 
                        <button>Busqueda</button> 
                        <button>Filtros</button> 
                        <button>Ordenar</button> 
                    </div> 
                    <div className="info-sections"> 
                    
                            <div className="info-box purple">Información paciente
                                <div className="info-paciente">
                                    {/* en este div ira informacion como el nombre
                                    estatus y fecha de ingreso al tratamineto. o de inicio
                                    o finalizacion de la etapa, aun no se muy bien cual es 
                                    la mas ideal */}
                                </div>    
                            </div> 
                        <div className="info-paciente">

                        <div className="info-box yellow large">Estatus</div> 
                        <div className="info-box yellow large">Línea del tiempo</div> 
                        {/* <div className="info-box yellow large">Box 4</div> 
                        <div className="info-box green large">Box 5</div>  */}
                        </div>
                        
                        
                    </div> 
                </div> 
        </div>


    )


}





export default TerapeutaView;