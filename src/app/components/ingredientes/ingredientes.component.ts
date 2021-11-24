import { Component, OnInit } from '@angular/core';
import { IngredienteService } from 'src/app/services/ingrediente.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css'],
  providers: [IngredienteService]
})
export class IngredientesComponent implements OnInit {

  ngOnInit(): void {
  }

  ingredientes = [ 
    {
      nameIngrediente: "",
      unidad_medida: "",
      cantidad: 0,
    },
  ];
  selectedIngrediente:any;

  constructor(private ingredienteService:IngredienteService){
    this.getIngredientes();
    this.selectedIngrediente = {nameIngrediente: '' , unidad_medida: '', cantidad: 0};
  }

  getIngredientes= () =>{
    this.ingredienteService.getAllIngredientes().subscribe(
      data =>{
        this.ingredientes = data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  ingredienteClicked = (ingrediente:any) => {
    //console.log(ingrediente.nameIngrediente)
    this.ingredienteService.getOneIngrediente(ingrediente.nameIngrediente).subscribe(
      (data:any) =>{
        this.selectedIngrediente=data;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  } 
  updateIngrediente = () => {
    //console.log(ingrediente.nameIngrediente)
    this.ingredienteService.updateIngrediente(this.selectedIngrediente).subscribe(
      (data:any) =>{
        //this.selectedIngrediente=data;
        this.getIngredientes();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  addIngrediente = () => {
    //console.log(ingrediente.nameIngrediente)
    this.ingredienteService.addIngrediente(this.selectedIngrediente).subscribe(
      (data:any) =>{
        this.ingredientes.push(data);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  deleteIngrediente = () => {
    //console.log(ingrediente.nameIngrediente)
    this.ingredienteService.deleteIngrediente(this.selectedIngrediente.name).subscribe(
      (data:any) =>{
        this.getIngredientes();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
