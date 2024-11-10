import ExpedienteModel from "../models/ExpedienteModel.js";

export const createExpediente = async (req, res) => {
    try {
        await ExpedienteModel.create(req.body);
        res.json({ message: "Expediente creado" });
    } catch (error) {
        res.json({ message: error });
    }
}

export const getExpediente = async (req, res) => {
    try {
        const paciente = await ExpedienteModel.findOne({
            where: { exp_num: req.params.exp_num }
        });
        res.json(paciente);
    }    
    catch (error) {
        res.json({ message: error });
    }
};

export const updateExpediente = async (req, res) => {
    try {
        await ExpedienteModel.update(req.body, {
            where: { exp_num: req.params.exp_num }
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}