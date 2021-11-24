import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css'],
  providers: [SolicitudService]
})
export class SolicitudComponent implements OnInit {

  ngOnInit(): void {
    this.updateSolicitud()
  }

  solicitudes = [ 
    {
      nameSolicitud: "",
      tipo: "",
      peso_minimo: "",
      fecha_solicitud: "",
      fecha_entrega: "",
      descripcion: "",
      empleado: "",
    },
  ];
  selectedSolicitud:any;

  constructor(private solicitudService:SolicitudService){
    this.getSolicitudes();
    this.selectedSolicitud = {nameSolicitud: "", tipo: "", peso_minimo: "", fecha_solicitud: "", 
    fecha_entrega: "", descripcion: "", empleado: ""};
  }

  getSolicitudes= () =>{
    this.solicitudService.getAllSolicitudes().subscribe(
      data =>{
        this.solicitudes = data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  solicitudClicked = (solicitud:any) => {
    //console.log(solicitud.nameSolicitud)
    this.solicitudService.getOneSolicitud(solicitud.nameSolicitud).subscribe(
      (data:any) =>{
        this.selectedSolicitud=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  } 
  updateSolicitud = () => {
    //console.log(solicitud.nameSolicitud)
    this.solicitudService.updateSolicitud(this.selectedSolicitud).subscribe(
      (data:any) =>{
        //this.selectedSolicitud=data;
        this.getSolicitudes();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  addSolicitud = () => {
    //console.log(solicitud.nameSolicitud)
    this.solicitudService.addSolicitud(this.selectedSolicitud).subscribe(
      (data:any) =>{
        this.solicitudes.push(data);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  deleteSolicitud = () => {
    //console.log(solicitud.nameSolicitud)
    this.solicitudService.deleteSolicitud(this.selectedSolicitud.nameSolicitud).subscribe(
      (data:any) =>{
        this.getSolicitudes();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

}
