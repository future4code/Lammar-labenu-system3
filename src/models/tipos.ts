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
