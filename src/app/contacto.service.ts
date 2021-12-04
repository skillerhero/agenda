import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http: HttpClient) { }
  getContacto(id): Observable<any>{
    return this.http.get("/api/contactos/" + id);
  }
}
