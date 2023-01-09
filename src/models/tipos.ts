export enum TYPE_CLASS{
    INTEGRAL = "integral",
    NOTURNA = "noturno"
}
export type createClassInput = {
    id:number,
    nome: string,
    modulo: number,
    tipo:TYPE_CLASS
}
export type createStudentInput = {
    id:string,
    nome:string,
    email:string,
    data_nasc:string,
    hobbies:string[],
    turma_id:number
}

export type createTeacherInput = {
    id:string,
    nome:string,
    email:string,
    data_nasc:string,
    especialidades:string,
    turma_id:string
}

// export enum ESPECIALIDADE{
//     "REACT" = 1,
//     "CSS" = 2,
//     "JS" = 3,
//     "TYPESCRIPT" = 4,
//     "FRONTEND" = 5,
//     "POO" = 6,
//     "MYSQL" = 7
// }

