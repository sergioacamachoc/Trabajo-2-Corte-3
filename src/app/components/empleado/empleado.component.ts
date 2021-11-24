import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadoComponent implements OnInit {

  ngOnInit(): void {
    this.updateEmpelado()
  }

  empleados = [ 
    {
      id: 0,
      nombre: "",
      salario: 0,
    },
  ];
  selectedEmpleado:any;

  constructor(private empleadoService:EmpleadoService){
    this.getEmpleados();
    this.selectedEmpleado = {id: 0, nombre: '' , salario: 0};
  }

  getEmpleados= () =>{
    this.empleadoService.getAllEmpleados().subscribe(
      data =>{
        this.empleados = data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  empleadoClicked = (empleado:any) => {
    //console.log(empleado.id)
    this.empleadoService.getOneEmpleado(empleado.id).subscribe(
      (data:any) =>{
        this.selectedEmpleado=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  } 
  updateEmpelado = () => {
    //console.log(empleado.id)
    this.empleadoService.updateEmpleado(this.selectedEmpleado).subscribe(
      (data:any) =>{
        //this.selectedEmpleado=data;
        this.getEmpleados();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  addEmpelado = () => {
    //console.log(empleado.id)
    this.empleadoService.addEmpleado(this.selectedEmpleado).subscribe(
      (data:any) =>{
        this.empleados.push(data);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  deleteEmpelado = () => {
    //console.log(empleado.id)
    this.empleadoService.deleteEmpleado(this.selectedEmpleado.id).subscribe(
      (data:any) =>{
        this.getEmpleados();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

}
