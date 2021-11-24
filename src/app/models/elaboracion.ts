import { Ingredientes } from "./ingredientes";
import { Pastelero } from "./pastelero";
import { Solicitud } from "./solicitud";

export class Elaboracion{
    solicitud:Solicitud;
    pasteleros:Pastelero;
    ingredientes:Ingredientes;
    constructor(solicitud:Solicitud, pasteleros:Pastelero,
        ingredientes:Ingredientes){
            this.solicitud=solicitud;
            this.pasteleros=pasteleros;
            this.ingredientes=ingredientes;
    }
}