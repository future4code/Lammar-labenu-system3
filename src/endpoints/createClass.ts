import { Request, Response } from "express";
import connection from "../database/connections";
import { createClassInput, TYPE_CLASS } from "../models/tipos";

export const createClass = async (req: Request, res: Response) => {
    let errorCode= 400
    try{
     const input: createClassInput = {
        id: req.body.id,
        nome: req.body.nome,
        modulo: 0,
        tipo: req.body.tipo
     }

     if(!input.id || !input.nome || !input.tipo){
        errorCode = 422
        throw new Error("Preencha os campos corretamente")
     }
     if(input.tipo !== TYPE_CLASS.INTEGRAL && input.tipo !== TYPE_CLASS.NOTURNA){
        errorCode = 422
        throw new Error("Os valores possíveis são 'integral' ou 'noturno'.")
     }
     if(input.tipo === TYPE_CLASS.NOTURNA){
        input.nome = input.nome+="-na-night"
     }
     await connection.raw(`
     INSERT INTO TURMA (id, nome, modulo)
     VALUES(
        "${input.id}",
        "${input.nome}",
        ${input.modulo}
     )
     `)
        res.status(201).send({message:"Turma Criada com sucesso"})
    } catch (error:any){
        res.status(errorCode).send({message: error.message})
    }
}