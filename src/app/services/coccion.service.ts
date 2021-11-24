import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CoccionService {

    baseurl='http://127.0.0.1:8080';
    httpHeaders = new HttpHeaders({'Content-type':'application/json'})

    constructor(private http: HttpClient) { }

    getAllCocciones(): Observable<any>{
        return this.http.get(
            this.baseurl+"/coccion/", 
            {headers: this.httpHeaders}
          );
      }
      getOneCoccion(nameSolicitud:any): Observable<any>{
        return this.http.get(
            this.baseurl+"/coccion/"+nameSolicitud+"/", 
            {headers: this.httpHeaders}
          );
      }
      updateCoccion(coccion:any): Observable<any>{
        const body= {elaboracion: coccion.elaboracion, temperatura: coccion.temperatura , fechahora_inicio: coccion.fechahora_inicio
        , fechahora_final: coccion.fechahora_final, horno: coccion.horno};
        ;
        return this.http.put(
            this.baseurl+"/coccion/"+coccion.nameSolicitud+"/", body,
            {headers: this.httpHeaders}
          );
      }
      addCoccion(coccion:any): Observable<any>{
        const body= {elaboracion: coccion.elaboracion, temperatura: coccion.temperatura , fechahora_inicio: coccion.fechahora_inicio
          , fechahora_final: coccion.fechahora_final, horno: coccion.horno};
        ;
        return this.http.post(
            this.baseurl+"/coccion/", body,
            {headers: this.httpHeaders}
          );
      }
      deleteCoccion(nameSolicitud:any): Observable<any>{
        return this.http.delete(
            this.baseurl+"/coccion/"+nameSolicitud+"/",
            {headers: this.httpHeaders}
          );
      }
  }