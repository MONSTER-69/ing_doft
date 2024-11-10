import db from "../database/db.js";
import { DataTypes } from "sequelize";

const TerapeutaModel=db.define("terapeutas", {
    numero_tel: {type:DataTypes.STRING, primaryKey:true},
    password:{type:DataTypes.STRING},
    tipo_terapeuta:{type:DataTypes.STRING},
    nombre:{type:DataTypes.STRING},
    apellido:{type:DataTypes.STRING},

});

export default TerapeutaModel;