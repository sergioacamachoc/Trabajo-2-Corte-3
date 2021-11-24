import { Elaboracion } from "./elaboracion";

export class Coccion{
    elaboracion:Elaboracion;
    temperatura:number;
    fechahora_inicio:Date;
    fechahora_final:Date;
    constructor(elaboracion:Elaboracion, temperatura:number, fechahora_inicio:Date,
        fechahora_final:Date){
            this.elaboracion=elaboracion;
            this.temperatura=temperatura;
            this.fechahora_inicio=fechahora_inicio;
            this.fechahora_final=fechahora_final
    }
}