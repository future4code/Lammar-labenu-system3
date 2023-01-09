export enum TYPE_CLASS{
    INTEGRAL = "integral",
    NOTURNA = "noturno"
}
export enum ESPECIALIDADE {
    JS = 1,
    CSS = 2,
    React = 3,
    Typescript = 4,
    POO = 5
}

export type createClassInput = {
    id:number,
    nome: string,
    modulo: number,
    tipo:TYPE_CLASS
}
export type createStudentInput = {
    id:number,
    nome:string,
    email:string,
    data_nasc:string,
    hobbies:string,
    turma_id:number
}
export type createTeacherInput = {
    id:number,
    nome:string,
    email:string,
    data_nasc:string,
    especialidades:ESPECIALIDADE[],
    turma_id:number
}
export type updateStudentInput = {
    estudante_id:number,
    turma_id:number
}
export type updateTeacherInput = {
    docente_id:number,
    turma_id:number
}
