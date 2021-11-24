import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-decorador',
  templateUrl: './decorador.component.html',
  styleUrls: ['./decorador.component.css'],
  providers: [EmpleadoService]
})
export class DecoradorComponent implements OnInit {

  ngOnInit(): void {
    this.updateDecorador()
  }

  decoradores = [ 
    {
      empleado: "",
      n_pasaporteD: "",
      pais_origenD: "",
      experienciaD: 0,
    },
  ];
  selectedDecorador:any;

  constructor(private decoradorService:EmpleadoService){
    this.getDecoradores();
    this.selectedDecorador = {empleado: "", n_pasaporteD: "", pais_origenD: "", experienciaD: 0,};
  }

  getDecoradores= () =>{
    this.decoradorService.getAllDecoradores().subscribe(
      data =>{
        this.decoradores = data;
        console.log("decoradores")
        console.log(this.decoradores)
        console.log("data")
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  decoradorClicked = (decorador:any) => {
    //console.log(decorador.id)
    this.decoradorService.getOneDecorador(decorador.id).subscribe(
      (data:any) =>{
        this.selectedDecorador=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  } 
  updateDecorador = () => {
    //console.log(decorador.id)
    this.decoradorService.updateDecorador(this.selectedDecorador).subscribe(
      (data:any) =>{
        //this.selectedDecorador=data;
        this.getDecoradores();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  addDecorador = () => {
    //console.log(decorador.id)
    this.decoradorService.addDecorador(this.selectedDecorador).subscribe(
      (data:any) =>{
        this.decoradores.push(data);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  deleteDecorador = () => {
    //console.log(decorador.id)
    this.decoradorService.deleteDecorador(this.selectedDecorador.id).subscribe(
      (data:any) =>{
        this.getDecoradores();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

}
