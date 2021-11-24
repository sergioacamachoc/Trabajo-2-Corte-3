import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class HornoService {

    baseurl='http://127.0.0.1:8080';
    httpHeaders = new HttpHeaders({'Content-type':'application/json'})

    constructor(private http: HttpClient) { }

    getAllHornos(): Observable<any>{
        return this.http.get(
            this.baseurl+"/horno/", 
            {headers: this.httpHeaders}
          );
      }
      getOneHorno(marca:any): Observable<any>{
        return this.http.get(
            this.baseurl+"/horno/"+marca+"/", 
            {headers: this.httpHeaders}
          );
      }
      updateHorno(horno:any): Observable<any>{
        const body= {marca: horno.marca , valor: horno.valor};
        ;
        return this.http.put(
            this.baseurl+"/horno/"+horno.marca+"/", body,
            {headers: this.httpHeaders}
          );
      }
      addHorno(horno:any): Observable<any>{
        const body= {marca: horno.marca , valor: horno.marca};
        ;
        return this.http.post(
            this.baseurl+"/horno/", body,
            {headers: this.httpHeaders}
          );
      }
      deleteHorno(marca:any): Observable<any>{
        return this.http.delete(
            this.baseurl+"/horno/"+marca+"/",
            {headers: this.httpHeaders}
          );
      }
  }