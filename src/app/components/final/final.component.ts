import { Component, OnInit } from '@angular/core';
import { FinalService } from 'src/app/services/final.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
  providers: [FinalService]
})
export class FinalComponent implements OnInit {

  ngOnInit(): void {
    this.updateFinal()
  }

  finales = [ 
    {
      coccion: "",
      decorador: "",
      fechahora_inicio: "",
      fechcahora_final: "",
      peso_final: 0,
      fecha_entrega: ""
    },
  ];
  selectedFinal:any;

  constructor(private finalService:FinalService){
    this.getFinales();
    this.selectedFinal = {coccion: "", decorador: "", fechahora_inicio: "", fechcahora_final: "",
    peso_final: 0, fecha_entrega: ""};
  }

  getFinales= () =>{
    this.finalService.getAllFinales().subscribe(
      data =>{
        this.finales = data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  finalClicked = (final:any) => {
    //console.log(final.nameSolicitud)
    this.finalService.getOneFinal(final.nameSolicitud).subscribe(
      (data:any) =>{
        this.selectedFinal=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  } 
  updateFinal = () => {
    //console.log(final.nameSolicitud)
    this.finalService.updateFinal(this.selectedFinal).subscribe(
      (data:any) =>{
        //this.selectedFinal=data;
        this.getFinales();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  addFinal = () => {
    //console.log(final.nameSolicitud)
    this.finalService.addFinal(this.selectedFinal).subscribe(
      (data:any) =>{
        this.finales.push(data);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  deleteFinal = () => {
    //console.log(final.nameSolicitud)
    this.finalService.deleteFinal(this.selectedFinal.nameSolicitud).subscribe(
      (data:any) =>{
        this.getFinales();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

  
}
