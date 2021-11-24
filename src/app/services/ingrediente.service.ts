import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class IngredienteService {

    baseurl='http://127.0.0.1:8080';
    httpHeaders = new HttpHeaders({'Content-type':'application/json'})

    constructor(private http: HttpClient) { }

    getAllIngredientes(): Observable<any>{
        return this.http.get(
            this.baseurl+"/ingrediente/", 
            {headers: this.httpHeaders}
          );
      }
      getOneIngrediente(nameIngrediente:any): Observable<any>{
        return this.http.get(
            this.baseurl+"/ingrediente/"+nameIngrediente+"/", 
            {headers: this.httpHeaders}
          );
      }
      updateIngrediente(ingrediente:any): Observable<any>{
        const body= {nameIngrediente: ingrediente.nameIngrediente , unidad_medida: ingrediente.unidad_medida, cantidad: ingrediente.cantidad};
        ;
        return this.http.put(
            this.baseurl+"/ingrediente/"+ingrediente.nameIngrediente+"/", body,
            {headers: this.httpHeaders}
          );
      }
      addIngrediente(ingrediente:any): Observable<any>{
        const body= {nameIngrediente: ingrediente.nameIngrediente , unidad_medida: ingrediente.unidad_medida, cantidad: ingrediente.cantidad};
        ;
        return this.http.post(
            this.baseurl+"/ingrediente/", body,
            {headers: this.httpHeaders}
          );
      }
      deleteIngrediente(nameIngrediente:any): Observable<any>{
        return this.http.delete(
            this.baseurl+"/ingrediente/"+nameIngrediente+"/",
            {headers: this.httpHeaders}
          );
      }
  }