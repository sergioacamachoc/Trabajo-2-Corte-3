import { Empleado } from "./empleado";

export class Decorador{
    empleado:Empleado;
    n_pasaporte:string;
    pais_origen:string;
    experiencia:number;
    constructor(empleado:Empleado,n_pasaporte:string, pais_origen:string,
        experiencia:number){
            this.empleado=empleado;
            this.n_pasaporte=n_pasaporte;
            this.pais_origen=pais_origen;
            this.experiencia=experiencia;
    }
}