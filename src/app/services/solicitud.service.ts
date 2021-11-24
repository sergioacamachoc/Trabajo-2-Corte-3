import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class SolicitudService {

    baseurl='http://127.0.0.1:8080';
    httpHeaders = new HttpHeaders({'Content-type':'application/json'})

    constructor(private http: HttpClient) { }

    getAllSolicitudes(): Observable<any>{
        return this.http.get(
            this.baseurl+"/solicitud/", 
            {headers: this.httpHeaders}
          );
      }
      getOneSolicitud(nameSolicitud:any): Observable<any>{
        return this.http.get(
            this.baseurl+"/solicitud/"+nameSolicitud+"/", 
            {headers: this.httpHeaders}
          );
      }
      updateSolicitud(solicitud:any): Observable<any>{
        const body= {nameSolicitud: solicitud.nameSolicitud , tipo: solicitud.tipo , peso_minimo: solicitud.peso_minimo , 
          fecha_solicitud: solicitud.fecha_solicitud , fecha_entrega: solicitud.fecha_entrega , 
          descripcion: solicitud.descripcion, empleado: solicitud.empleado};
        ;
        return this.http.put(
            this.baseurl+"/solicitud/"+solicitud.nameSolicitud+"/", body,
            {headers: this.httpHeaders}
          );
      }
      addSolicitud(solicitud:any): Observable<any>{
        const body= {nameSolicitud: solicitud.nameSolicitud , tipo: solicitud.tipo , peso_minimo: solicitud.peso_minimo , 
          fecha_solicitud: solicitud.fecha_solicitud , fecha_entrega: solicitud.fecha_entrega , 
          descripcion: solicitud.descripcion, empleado: solicitud.empleado};
        ;
        return this.http.post(
            this.baseurl+"/solicitud/", body,
            {headers: this.httpHeaders}
          );
      }
      deleteSolicitud(nameSolicitud:any): Observable<any>{
        return this.http.delete(
            this.baseurl+"/solicitud/"+nameSolicitud+"/",
            {headers: this.httpHeaders}
          );
      }
  }