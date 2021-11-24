export class Ingredientes{
    name:string;
    unidad_medida:string;
    cantidad:number;
    constructor(name:string, unidad_medida:string,
        cantidad:number){
            this.name=name;
            this.unidad_medida=unidad_medida;
            this.cantidad=cantidad;
    }
}