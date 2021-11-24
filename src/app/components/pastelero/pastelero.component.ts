import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pastelero',
  templateUrl: './pastelero.component.html',
  styleUrls: ['./pastelero.component.css'],
  providers: [EmpleadoService]
})
export class PasteleroComponent implements OnInit {

  ngOnInit(): void {
    this.updatePastelero()
  }

  pasteleros = [ 
    {
      empleado: "",
      n_pasaporteP: "",
      pais_origenP: "",
      experienciaP: 0,
    },
  ];
  selectedPastelero:any;

  constructor(private pasteleroService:EmpleadoService){
    this.getPasteleros();
    this.selectedPastelero = {empleado: "", n_pasaporteP: "", pais_origenP: "", experienciaP: 0,};
  }

  getPasteleros= () =>{
    this.pasteleroService.getAllPasteleros().subscribe(
      data =>{
        this.pasteleros = data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  pasteleroClicked = (pastelero:any) => {
    //console.log(pastelero.id)
    this.pasteleroService.getOnePastelero(pastelero.id).subscribe(
      (data:any) =>{
        this.selectedPastelero=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  } 
  updatePastelero = () => {
    //console.log(pastelero.id)
    this.pasteleroService.updatePastelero(this.selectedPastelero).subscribe(
      (data:any) =>{
        //this.selectedPastelero=data;
        this.getPasteleros();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  addPastelero = () => {
    //console.log(pastelero.id)
    this.pasteleroService.addPastelero(this.selectedPastelero).subscribe(
      (data:any) =>{
        this.pasteleros.push(data);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  deletePastelero = () => {
    //console.log(pastelero.id)
    this.pasteleroService.deletePastelero(this.selectedPastelero.id).subscribe(
      (data:any) =>{
        this.getPasteleros();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

}


