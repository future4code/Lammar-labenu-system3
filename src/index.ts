import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";


const app = express ();
app.use(express.json());
app.use(cors());


app.listen(3003,()=> {
    console.log("Servidor rodando na porta 3003");
})

app.get("/ping", ping);

//Turma
app.post("/turma", createClass);

//Estudante
app.post("/estudante", createStudent)