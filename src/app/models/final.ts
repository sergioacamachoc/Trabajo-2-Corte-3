import { Coccion } from "./coccion";
import { Decorador } from "./decorador";

export class Final{
    coccion:Coccion;
    decorador:Decorador;
    fechahora_inicio:Date;
    fechahora_final:Date;
    peso_final:number;
    fecha_entrega:Date;
    constructor(coccion:Coccion, decorador:Decorador, fechahora_inicio:Date, fechahora_final:Date,
        peso_final:number,fecha_entrega:Date){
            this.coccion=coccion;
            this.decorador=decorador;
            this.fechahora_inicio=fechahora_inicio;
            this.fechahora_final=fechahora_final;    
            this.peso_final=peso_final;
            this.fecha_entrega=fecha_entrega;
        }
}