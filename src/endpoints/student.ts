import { Request, Response } from "express";
import connection from "../database/connections";
import { updateStudentInput } from "../models/tipos";

export const student = async (req: Request, res: Response) =>{
    let errorCode = 400
    try {

        const input: updateStudentInput = {
            estudante_id: req.body.estudante_id,
            turma_id: req.body.turma_id
        }

        await connection.raw(`
        UPDATE ESTUDANTE SET turma_id = ${input.turma_id}
        WHERE id = ${input.estudante_id}
        `)
        res.status(200).send({message: "Atualizado com sucesso!"})

    }catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }

}