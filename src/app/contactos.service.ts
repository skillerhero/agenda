import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  usuario:any
  contactos = new Subject<any[]>();
  constructor(private http: HttpClient) {
    //this.getContactos(this.usuario);
  }
  getContactos(){
    this.http.get<any[]>("/api/usuario/"+this.usuario+"/contacto").subscribe(
      data =>{
        this.contactos.next(data);
      }
    );
  }
}
