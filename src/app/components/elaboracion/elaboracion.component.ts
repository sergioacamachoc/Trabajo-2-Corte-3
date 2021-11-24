import { Component, OnInit } from '@angular/core';
import { ElaboracionService } from 'src/app/services/elaboracion.service';

@Component({
  selector: 'app-elaboracion',
  templateUrl: './elaboracion.component.html',
  styleUrls: ['./elaboracion.component.css'],
  providers: [ElaboracionService]
})
export class ElaboracionComponent implements OnInit {

  ngOnInit(): void {
    this.updateElaboracion()
  }

  elaboraciones = [ 
    {
      solicitud: "",
      pasteleros: "",
      ingredientes: "",
    },
  ];
  selectedElaboracion:any;

  constructor(private elaboracionService:ElaboracionService){
    this.getElaboraciones();
    this.selectedElaboracion = {solicitud: "", pasteleros: "", ingredientes: ""};
  }

  getElaboraciones= () =>{
    this.elaboracionService.getAllElaboraciones().subscribe(
      data =>{
        this.elaboraciones = data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  elaboracionClicked = (elaboracion:any) => {
    //console.log(elaboracion.nameSolicitud)
    this.elaboracionService.getOneElaboracion(elaboracion.nameSolicitud).subscribe(
      (data:any) =>{
        this.selectedElaboracion=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  } 
  updateElaboracion = () => {
    //console.log(elaboracion.nameSolicitud)
    this.elaboracionService.updateElaboracion(this.selectedElaboracion).subscribe(
      (data:any) =>{
        //this.selectedElaboracion=data;
        this.getElaboraciones();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  addElaboracion = () => {
    //console.log(elaboracion.nameSolicitud)
    this.elaboracionService.addElaboracion(this.selectedElaboracion).subscribe(
      (data:any) =>{
        this.elaboraciones.push(data);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  deleteElaboracion = () => {
    //console.log(solicitud.nameSolicitud)
    this.elaboracionService.deleteElaboracion(this.selectedElaboracion.id).subscribe(
      (data:any) =>{
        this.getElaboraciones();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

}
