import ExpedienteModel from "../models/ExpedienteModel.js";
import TerapeutaModel from "../models/terapeutaModel.js";
import Pacientes_terapeutaModel from "../models/Pacientes_terapeutaModel.js";
import Models from "../models/modelos.js";
import { Op } from "sequelize";
import { query } from "express";

// export const createExpediente = async (req, res) => {
//     try {
//         await ExpedienteModel.create(req.body);
//         res.json({ message: "Expediente creado" });
//     } catch (error) {
//         res.json({ message: error });
//     }
// }

// export const getExpediente = async (req, res) => {
//     try {
//         const paciente = await ExpedienteModel.findOne({
//             where: { exp_num: req.params.exp_num }
//         });
//         res.json(paciente);
//     }    
//     catch (error) {
//         res.json({ message: error });
//     }
// };

// export const updateExpediente = async (req, res) => {
//     try {
//         await ExpedienteModel.update(req.body, {
//             where: { exp_num: req.params.exp_num }
//         })
//         res.json({
//             "message":"¡Registro actualizado correctamente!"
//         })
//     } catch (error) {
//         res.json( {message: error.message} )
//     }
// }

export const handleRequest = async (req, res)=>{
    try{
        const {model, id}=req.params;
        const {method}=req;
        const Model =Models[model]

        if(!Model){
            return res.status(400).json({error: "Moelo no encontrado"});
        }

        const idField = Model.primaryKeyAttributes ? Model.primaryKeyAttributes[0] : "id";
        let result;

        switch(method){
            case "GET":
                if(req.query.condition && req.query.value){
                    //filtrar por cualquier condicion espedicifia
                    result = await Model.findAll({where : { [req.query.condition]: req.query.value}});
                }else{
                    result = id ? await Model.findOne({where: {[idField]:id}}): await Model.findAll();
                }
                
                break;
            case "POST":
                result=await Model.create(req.body);
                break;
            case "PUT":
                if(!id) return res.status(400).json({error: "ID es necesario para actualizar"});
                await Model.update(req.body,{where:{[idField]:id}});
                result = await Model.findOne({where:{[idField]:id}});
                break;
            default:
                return res.status(405).jason({error:"Metodo no permitidio"});


        }
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}



