import { Component, OnInit } from '@angular/core';
import { HornoService } from 'src/app/services//horno.service';

@Component({
  selector: 'app-horno',
  templateUrl: './horno.component.html',
  styleUrls: ['./horno.component.css'],
  providers: [HornoService]
})
export class HornoComponent implements OnInit {

  ngOnInit(): void {
  }

  hornos = [ 
    {
      marca: "",
      valor: 0,
    },
  ];
  selectedHorno:any;

  constructor(private hornoService:HornoService){
    this.getHornos();
    this.selectedHorno = {marca: '' , valor: 0};
  }

  getHornos= () =>{
    this.hornoService.getAllHornos().subscribe(
      data =>{
        this.hornos = data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  hornoClicked = (horno:any) => {
    //console.log(horno.marca)
    this.hornoService.getOneHorno(horno.marca).subscribe(
      (data:any) =>{
        this.selectedHorno=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  } 
  updateHorno = () => {
    //console.log(horno.marca)
    this.hornoService.updateHorno(this.selectedHorno).subscribe(
      (data:any) =>{
        //this.selectedHorno=data;
        this.getHornos();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  addHorno = () => {
    //console.log(empleado.id)
    this.hornoService.addHorno(this.selectedHorno).subscribe(
      (data:any) =>{
        this.hornos.push(data);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  deleteHorno = () => {
    //console.log(empleado.id)
    this.hornoService.deleteHorno(this.selectedHorno.id).subscribe(
      (data:any) =>{
        this.getHornos();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
