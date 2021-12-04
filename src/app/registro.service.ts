import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }
  registrarUsuario(usuario, contrasenia): Observable<any>{
    return this.http.post("/api/usuario", 
    {
      "usuario": usuario,
      "contrasenia": contrasenia
    }
    );
  }
}
