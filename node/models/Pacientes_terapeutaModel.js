import db from "../database/db.js";
import { DataTypes } from "sequelize";
import ExpedienteModel from "./ExpedienteModel.js";
import TerapeutaModel from "./terapeutaModel.js";

const Pacientes_terapeutaModel=db.define("pacientes_terapeuta",{
    idpaciente_terapeut:{type:DataTypes.INTEGER, primaryKey:true},
    exp_num:{
        type:DataTypes.INTEGER,
        references:{
            model:ExpedienteModel,
            key:"exp_num"
        }
    },
    numero_tel_terapeuta:{
        type:DataTypes.STRING,
        references:{
            model:TerapeutaModel,
            key:"numero_tel"
        }
    },
    etapa:{type:DataTypes.STRING},
    estado_etapa:{type:DataTypes.STRING},
    tratamiento_terminado:{type:DataTypes.TINYINT}

});

ExpedienteModel.hasMany(Pacientes_terapeutaModel,{foreignKey:"exp_num"});
TerapeutaModel.hasMany(Pacientes_terapeutaModel,{foreignKey:"numero_tel_terapeuta"});

Pacientes_terapeutaModel.belongsTo(ExpedienteModel,{foreignKey:"exp_num"});
Pacientes_terapeutaModel.belongsTo(TerapeutaModel,{foreignKey:"numero_tel"});


export default Pacientes_terapeutaModel;


