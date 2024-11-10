//importamos conexion bd
import db from "../database/db.js";

import { DataTypes } from "sequelize"; 

const ExpedienteModel = db.define("pacientes", {
    exp_num: { type: DataTypes.INTEGER, primaryKey: true},
    nombre: { type: DataTypes.STRING},
    fecha_nacimiento: { type: DataTypes.DATE},
    numero_tel: { type: DataTypes.STRING}, 
    remitido: { type: DataTypes.TINYINT}
});

export default ExpedienteModel;  //exportamos el modelo