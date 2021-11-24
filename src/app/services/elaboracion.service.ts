import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ElaboracionService {

    baseurl='http://127.0.0.1:8080';
    httpHeaders = new HttpHeaders({'Content-type':'application/json'})

    constructor(private http: HttpClient) { }

    getAllElaboraciones(): Observable<any>{
        return this.http.get(
            this.baseurl+"/elaboracion/", 
            {headers: this.httpHeaders}
          );
      }
      getOneElaboracion(name:any): Observable<any>{
        return this.http.get(
            this.baseurl+"/ingrediente/"+name+"/", 
            {headers: this.httpHeaders}
          );
      }
      updateElaboracion(elaboracion:any): Observable<any>{
        const body= {solicitud: elaboracion.solicitud, pasteleros: elaboracion.pastelero, ingredientes: elaboracion.ingrediente};
        ;
        return this.http.put(
            this.baseurl+"/elaboracion/"+elaboracion.nameSolicitud+"/", body,
            {headers: this.httpHeaders}
          );
      }
      addElaboracion(elaboracion:any): Observable<any>{
        const body= {solicitud: elaboracion.solicitud, pastelero: elaboracion.pastelero, ingrediente: elaboracion.ingrediente};
        ;
        return this.http.post(
            this.baseurl+"/elaboracion/", body,
            {headers: this.httpHeaders}
          );
      }
      deleteElaboracion(nameSolicitud:any): Observable<any>{
        return this.http.delete(
            this.baseurl+"/elaboracion/"+nameSolicitud+"/",
            {headers: this.httpHeaders}
          );
      }
  }