import { Request, Response } from "express";
import connection from "../database/connections";
import { createStudentInput } from "../models/tipos";


export const createStudent = async (req: Request, res: Response) => {
    let errorCode= 400
    try{
     const input: createStudentInput = {
        id: req.body.id,
        nome: req.body.nome,
        email: req.body.email,
        data_nasc:req.body.data_nasc,
        hobbies: req.body.hobbies,
        turma_id: req.body.turma_id
     } 
     if(!input.id || !input.nome || !input.email || !input.data_nasc || input.hobbies.length<1){
        errorCode = 422
        throw new Error("Preencha os campos corretamente")
     }

     await connection.raw(`
     INSERT INTO ESTUDANTE(id, nome, email, data_nasc, turma_id)
     VALUES
     (${input.id},
     "${input.nome}",
     "${input.email}",
     "${input.data_nasc}",
      ${input.turma_id}
    )
     `)
     for (let hobby of input.hobbies){
        await connection.raw(`
        INSERT INTO HOBBY(id,nome)
        VALUES(
            "${hobby}"
        )
        `)

        await connection.raw(`
        INSERT INTO ESTUDANTE_HOBBY(estudante_id, hobby_id)
        VALUES(
            ${input.id},
            
        )
        `)
     }
     res.status(201).send({message:"Conseguimos criar"})
    }catch (error:any){   
     res.status(errorCode).send({message: error.message})
    }
}