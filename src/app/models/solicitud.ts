import { Empleado } from "./empleado";

export class Solicitud{
    name:string;
    tipo:string;
    peso_minimo:string;
    fecha_solicitud:Date;
    fecha_entrega:Date;
    descripcion:string;
    empleado:Empleado;
    constructor(name:string, tipo:string, peso_minimo:string, fecha_solicitud:Date,
        fecha_entrega:Date, descripcion:string, empleado:Empleado){
            this.name=name;
            this.tipo=tipo;
            this.peso_minimo=peso_minimo;
            this.fecha_solicitud=fecha_solicitud;
            this.fecha_entrega=fecha_entrega;
            this.descripcion=descripcion;
            this.empleado=empleado;
    }
}