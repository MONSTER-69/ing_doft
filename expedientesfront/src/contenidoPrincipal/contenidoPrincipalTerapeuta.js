import React, { useEffect } from "react";
import axios from "axios";
import '../App.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'

import CompFormularioRegistro from "../FormularioRegistro";


const URI = "http://localhost:3001/api/expedientes";

const TerapeutaView=()=>{

    // const [showForm, setShowForm ] = useState(false);
    const [pacientes, setPacientes]=useState([]);
    const [selectdPaciente, setSelectedPaciente]=useState(null);
    const [condition,setConfition] =useState('');
    const [value, setValue]=useState('');
    const navigate = useNavigate();

    // const fetchPacientes= async()=>{
    //     try{
    //         const response = await axios.get(`${URI}/expedientes`,{params:{condition, value}});
    //         setPacientes(response.data);
    //     }catch(error){
    //         console.error("error al obtener los pacintes", error);
    //     }
    // }
    const fetchPacientes=async () =>{
        try{
            const response = await axios.get(URI,{params:{limit:3}});
            setPacientes(response.data);
        }catch(error){
            console.error("error al obtener los pacintes", error);
        }
    }


    // const handViewDetails = async (exp_num)=>{
    //     try{
    //         const response = await axios.get(`${URI}/expedientes/${exp_num}`);
    //         setSelectedPaciente(response.data);
    //     }catch(error){
    //         console.error("Error al obtener la infromacion del paciente: ",error);
    //     }
    // }
    // mostrar la informacion completa del paceinte. 
    const handViewDetails = async (exp_num)=>{
        try{
            const response = await axios.get(`${URI}/${exp_num}`);
            setSelectedPaciente(response.data);
        }catch(error){
            console.error("Error al obtener la infromacion del paciente: ",error);
        }
    }

    // useEffect(()=>{
    //     if(condition && value){
    //         fetchPacientes();
    //     }
    // },[condition,value]);

    useEffect(()=>{
        fetchPacientes();
    },[]);
    

    const handleNuevoRegistroClick= ()=>{
        // setShowForm(true);
        navigate("/FormularioRegistro")
    };

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
                        {pacientes.length > 0 ? (
                            pacientes.map((paciente) =>(
                                <div key={paciente.exp_num} className="info-paciente">
                                    <div className="info-box purple">
                                        <p>Numero de Expediente: {paciente.exp_num}</p>
                                        <p>Nombre: {paciente.nombre}</p>
                                        <button onClick={()=>handViewDetails(paciente.exp_num)}>ver detalles</button>
                                    </div>
                                </div>
                            ))
                        ):(
                            <p>no se econtro ningun paciente</p>
                        )}
                    </div>
                    {selectdPaciente && (
                        <div className="paciente-detalles">
                            <h2>Detalles del Paciente</h2>
                            <p>Expediente: {selectdPaciente.exp_num}</p>
                            <p>Nombre: {selectdPaciente.nombre}</p>
                            <p>Fecha de Nacimiento {selectdPaciente.fecha_nacimiento}</p>
                            <p>Telefono: {selectdPaciente.numero_tel}</p>
                            <p>Remitido: {selectdPaciente.remitido ? "Si" : "No"}</p>
                        </div>
                    )}
            </div>
        </div>  
                        
                    


    );


};





export default TerapeutaView;


// {/* //     <div className="info-box purple">Información paciente
                        //         <div className="info-paciente">
                        //             {/* en este div ira informacion como el nombre
                        //             estatus y fecha de ingreso al tratamineto. o de inicio
                        //             o finalizacion de la etapa, aun no se muy bien cual es 
                        //             la mas ideal */}
                        //         </div>    
                        //     </div> 
                        // <div className="info-paciente">
                
                        // <div className="info-box yellow large">Estatus</div> 
                        // <div className="info-box yellow large">Línea del tiempo</div> 
                        // {/* <div className="info-box yellow large">Box 4</div> 
                        // <div className="info-box green large">Box 5</div>  */}
                        // </div> */}