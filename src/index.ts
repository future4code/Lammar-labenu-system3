import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import dotenv from "dotenv"

import { student } from "./endpoints/student";
import { teacher} from "./endpoints/teacher"
import dotenv from "dotenv"

dotenv.config()


const app = express ();
app.use(express.json());
app.use(cors());


app.listen(process.env.PORT || 3003,()=> {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
})

app.get("/ping", ping);

//Turma
app.post("/turma", createClass);

//Estudante

app.post("/estudante", createStudent);

//Docente
app.post("/docente", createTeacher);

app.post("/estudante", createStudent)
app.put("/estudante", student)

//Docente
app.post("/docente", createTeacher)
app.put("/docente", teacher)

