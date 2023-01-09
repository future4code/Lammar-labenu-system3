import { Request, Response } from "express";
import connection from "../database/connections";
import { updateTeacherInput } from "../models/tipos";

export const teacher = async (req: Request, res: Response) =>{
    let errorCode = 400
    try {

        const input: updateTeacherInput = {
            docente_id: req.body.docente_id,
            turma_id: req.body.turma_id
        }

        await connection.raw(`
        UPDATE DOCENTE SET turma_id = ${input.turma_id}
        WHERE id = ${input.docente_id}
        `)
        res.status(200).send({message: "Atualizado com sucesso!"})

    }catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }

}