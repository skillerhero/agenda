import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroContactoService {

  constructor(private http: HttpClient) { }
  registrarContacto(nombre, telefono, correo, facebook, twitter, instagram, foto, usuario): Observable<any>{
    return this.http.post("/api/contactos", 
    {
      "nombre": nombre,
      "telefono": telefono,
      "correo":correo,
      "facebook":facebook,
      "twitter":twitter,
      "instagram":instagram,
      "foto":foto,
      "usuario":usuario
    }
    );
  }
}
