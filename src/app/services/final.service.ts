import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class FinalService {

    baseurl='http://127.0.0.1:8080';
    httpHeaders = new HttpHeaders({'Content-type':'application/json'})

    constructor(private http: HttpClient) { }

    getAllFinales(): Observable<any>{
        return this.http.get(
            this.baseurl+"/final/", 
            {headers: this.httpHeaders}
          );
      }
      getOneFinal(nameSolicitud:any): Observable<any>{
        return this.http.get(
            this.baseurl+"/final/"+nameSolicitud+"/", 
            {headers: this.httpHeaders}
          );
      }
      updateFinal(final:any): Observable<any>{
        const body= {coccion: final.coccion, decorador: final.decorador, fechahora_inicio: final.fechahora_inicio, fechahora_final: final.fechcahora_final,
        peso_final: final.peso_final, fecha_entrega: final.fecha_entrega};
        ;
        return this.http.put(
            this.baseurl+"/final/"+final.nameSolicitud+"/", body,
            {headers: this.httpHeaders}
          );
      }
      addFinal(final:any): Observable<any>{
        const body= {coccion: final.coccion, decorador: final.decorador, fechahora_inicio: final.fechahora_inicio, fechahora_final: final.fechcahora_final,
          peso_final: final.peso_final, fecha_entrega: final.fecha_entrega};
        ;
        return this.http.post(
            this.baseurl+"/final/", body,
            {headers: this.httpHeaders}
          );
      }
      deleteFinal(nameSolicitud:any): Observable<any>{
        return this.http.delete(
            this.baseurl+"/final/"+nameSolicitud+"/",
            {headers: this.httpHeaders}
          );
      }
  }