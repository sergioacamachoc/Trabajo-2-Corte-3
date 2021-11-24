import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Decorador } from '../models/decorador';
import { Pastelero } from '../models/pastelero';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseurl='http://127.0.0.1:8080';
  httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor(private http: HttpClient) { }

  getAllEmpleados(): Observable<any>{
    console.log(this.baseurl+"/empleado/")
    return this.http.get(
        this.baseurl+"/empleado/", 
        {headers: this.httpHeaders}
      );
  }
  getOneEmpleado(id:any): Observable<any>{
    return this.http.get(
        this.baseurl+"/empleado/"+id+"/", 
        {headers: this.httpHeaders}
      );
  }
  updateEmpleado(empleado:any): Observable<any>{
    const body= {nombre: empleado.nombre , salario: empleado.salario};
    ;
    return this.http.put(
        this.baseurl+"/empleado/"+empleado.id+"/", body,
        {headers: this.httpHeaders}
      );
  }
  addEmpleado(empleado:any): Observable<any>{
    const body= {nombre: empleado.nombre , salario: empleado.salario};
    ;
    return this.http.post(
        this.baseurl+"/empleado/", body,
        {headers: this.httpHeaders}
      );
  }
  deleteEmpleado(id:any): Observable<any>{
    return this.http.delete(
        this.baseurl+"/empleado/"+id+"/",
        {headers: this.httpHeaders}
      );
  }

  getAllPasteleros(): Observable<any>{
    return this.http.get(
        this.baseurl+"/pastelero/", 
        {headers: this.httpHeaders}
      );
  }
  getOnePastelero(id:any): Observable<any>{
    return this.http.get(
        this.baseurl+"/pastelero/"+id+"/", 
        {headers: this.httpHeaders}
      );
  }
  getPasteleros():Observable<Pastelero[]>{
    return this.http.get<Pastelero[]>(this.httpHeaders+"pasteleros");
  }
  updatePastelero(pastelero:any): Observable<any>{
    const body= {empleado: pastelero.empleado , n_pasaporteP: pastelero.n_pasaporteP , pais_origenP: pastelero.pais_origenP , experienciaP: pastelero.experienciaP};
    ;
    return this.http.put(
        this.baseurl+"/pastelero/"+pastelero.id+"/", body,
        {headers: this.httpHeaders}
      );
  }
  addPastelero(pastelero:any): Observable<any>{
    const body= {empleado: pastelero.empleado, n_pasaporteP: pastelero.n_pasaporteP , pais_origenP: pastelero.pais_origenP , experienciaP: pastelero.experienciaP};
    ;
    return this.http.post(
        this.baseurl+"/pastelero/", body,
        {headers: this.httpHeaders}
      );
  }
  deletePastelero(id:any): Observable<any>{
    return this.http.delete(
        this.baseurl+"/pastelero/"+id+"/",
        {headers: this.httpHeaders}
      );
  }

  getAllDecoradores(): Observable<any>{
    return this.http.get(
        this.baseurl+"/decorador/", 
        {headers: this.httpHeaders}
      );
  }
  getOneDecorador(id:any): Observable<any>{
    return this.http.get(
        this.baseurl+"/decorador/"+id+"/", 
        {headers: this.httpHeaders}
      );
  }
  getDecoradores():Observable<Decorador[]>{
    return this.http.get<Decorador[]>(this.httpHeaders+"decoradores");
  }
  updateDecorador(decorador:any): Observable<any>{
    const body= {empleado: decorador.empleado , n_pasaporteD: decorador.n_pasaporteD , pais_origenD: decorador.pais_origenD , experienciaD: decorador.experienciaD};
    ;
    return this.http.put(
        this.baseurl+"/decorador/"+decorador.id+"/", body,
        {headers: this.httpHeaders}
      );
  }
  addDecorador(decorador:any): Observable<any>{
    const body= {empleado: decorador.empleado, n_pasaporteD: decorador.n_pasaporteD , pais_origenD: decorador.pais_origenD , experiencia: decorador.experienciaD};
    ;
    return this.http.post(
        this.baseurl+"/decorador/", body,
        {headers: this.httpHeaders}
      );
  }
  deleteDecorador(id:any): Observable<any>{
    return this.http.delete(
        this.baseurl+"/decorador/"+id+"/",
        {headers: this.httpHeaders}
      );
  }
  
}
