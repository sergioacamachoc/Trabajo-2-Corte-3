import { Component, OnInit } from '@angular/core';
import { CoccionService } from 'src/app/services/coccion.service';

@Component({
  selector: 'app-coccion',
  templateUrl: './coccion.component.html',
  styleUrls: ['./coccion.component.css'],
  providers: [CoccionService]
})
export class CoccionComponent implements OnInit {

  ngOnInit(): void {
    this.updateCoccion()
  }

  cocciones = [ 
    {
      elaboracion: "",

      temperatura: 0,
      fechahora_inicio: "",
      fechahora_final: "",

      horno: "",
    },
  ];
  selectedCoccion:any;

  constructor(private coccionService:CoccionService){
    this.getCocciones();
    this.selectedCoccion = {elaboracion: "",temperatura: 0, fechahora_inicio: "",
    fechahora_final: "", horno: "", };
  }

  getCocciones= () =>{
    this.coccionService.getAllCocciones().subscribe(
      data =>{
        this.cocciones = data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  coccionClicked = (coccion:any) => {
    //console.log(coccion.nameSolicitud)
    this.coccionService.getOneCoccion(coccion.nameSolicitud).subscribe(
      (data:any) =>{
        this.selectedCoccion=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  } 
  updateCoccion = () => {
    //console.log(coccion.nameSolicitud)
    this.coccionService.updateCoccion(this.selectedCoccion).subscribe(
      (data:any) =>{
        //this.selectedCoccion=data;
        this.getCocciones();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  addCoccion = () => {
    //console.log(coccion.nameSolicitud)
    this.coccionService.addCoccion(this.selectedCoccion).subscribe(
      (data:any) =>{
        this.cocciones.push(data);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  deleteCoccion = () => {
    //console.log(coccion.nameSolicitud)
    this.coccionService.deleteCoccion(this.selectedCoccion.id).subscribe(
      (data:any) =>{
        this.getCocciones();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

}
